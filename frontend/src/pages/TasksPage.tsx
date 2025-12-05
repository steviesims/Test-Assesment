import { useEffect, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createTask, deleteTask, fetchTasks, updateTask } from "../api/tasks";
import {
  Task,
  TaskInput,
  TaskStatus,
  SortField,
  SortOrder,
} from "../types/task";
import { statusOptions, TaskForm } from "../components/TaskForm";
import { TaskList } from "../components/TaskList";
import { useAuth } from "../hooks/useAuth";
import { fetchUsers } from "../api/users";
import { PAGE_START, PAGE_SIZE, STORAGE_KEY } from "../utils/constants";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { TaskFilterOptions } from "../types/task";

export const TasksPage = () => {
  const queryClient = useQueryClient();
  const { user } = useAuth();
  const [editingTask, setEditingTask] = useState<Task | null>(null);

  const [
    {
      query,
      status,
      assigneeIds,
      showMyTask,
      sortBy: savedSortBy,
      sortOrder: savedSortOrder,
    },
    saveFilterOptions,
  ] = useLocalStorage<TaskFilterOptions>(STORAGE_KEY, {
    query: "",
    status: [],
    assigneeIds: "",
    showMyTask: false,
    sortBy: "createdAt",
    sortOrder: "DESC",
  });

  const [selectedAssigneeId, setSelectedAssigneeId] = useState<string>(
    assigneeIds || ""
  );
  const [searchQuery, setSearchQuery] = useState<string>(query || "");
  const [selectedStatuses, setSelectedStatuses] = useState<TaskStatus[]>(
    status || []
  );
  const [showMyTasks, setShowMyTasks] = useState<boolean>(showMyTask || false);
  const [currentPage, setCurrentPage] = useState<number>(PAGE_START);
  const [sortBy, setSortBy] = useState<SortField>(savedSortBy || "createdAt");
  const [sortOrder, setSortOrder] = useState<SortOrder>(
    savedSortOrder || "DESC"
  );

  const { data: tasksResponse, isLoading } = useQuery({
    queryKey: [
      "tasks",
      currentPage,
      PAGE_SIZE,
      searchQuery,
      selectedStatuses,
      selectedAssigneeId,
      showMyTasks,
      sortBy,
      sortOrder,
    ],
    queryFn: () =>
      fetchTasks({
        page: currentPage,
        limit: PAGE_SIZE,
        search: searchQuery || undefined,
        status:
          selectedStatuses.length > 0 ? selectedStatuses.join(",") : undefined,
        assigneeId: selectedAssigneeId || undefined,
        myTasks: showMyTasks || undefined,
        sortBy,
        sortOrder,
      }),
  });

  const tasks = tasksResponse?.data || [];
  const pagination = tasksResponse?.pagination;

  const { data: users = [], isLoading: isLoadingUsers } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });

  const createMutation = useMutation({
    mutationFn: createTask,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["tasks"] }),
  });

  const updateMutation = useMutation({
    mutationFn: ({ id, payload }: { id: string; payload: TaskInput }) =>
      updateTask(id, payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
      setEditingTask(null);
    },
    onError: (error: any) => {
      if (error.response?.status === 403) {
        alert("You don't have permission to edit this task");
      } else {
        alert(error.response?.data?.message || "Failed to update task");
      }
    },
  });

  const deleteMutation = useMutation({
    mutationFn: deleteTask,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["tasks"] }),
    onError: (error: any) => {
      if (error.response?.status === 403) {
        alert("You don't have permission to delete this task");
      } else {
        alert(error.response?.data?.message || "Failed to delete task");
      }
    },
  });

  const handleCreate = (payload: TaskInput) => {
    createMutation.mutate(payload);
  };

  const handleUpdate = (payload: TaskInput) => {
    if (!editingTask) return;
    updateMutation.mutate({ id: editingTask.id, payload });
  };

  const canManage = user?.roles.some(
    (role) => role === "admin" || role === "manager"
  );

  useEffect(() => {
    if (currentPage !== PAGE_START) {
      setCurrentPage(PAGE_START);
    }
  }, [searchQuery, selectedStatuses, selectedAssigneeId, showMyTasks]);

  useEffect(() => {
    saveFilterOptions({
      query: searchQuery,
      status: selectedStatuses,
      assigneeIds: selectedAssigneeId,
      showMyTask: showMyTasks,
      sortBy,
      sortOrder,
    });
  }, [
    searchQuery,
    selectedStatuses,
    selectedAssigneeId,
    showMyTasks,
    sortBy,
    sortOrder,
  ]);

  return (
    <div className="tasks-page">
      <section className="tasks-section">
        <h2>Tasks</h2>
        <div className="form-group">
          <label htmlFor="task-search">Search Tasks</label>
          <input
            id="task-search"
            type="text"
            placeholder="Search by title or description..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Filter by Status</label>
          <div>
            {statusOptions.map((status) => (
              <label key={status}>
                <input
                  type="checkbox"
                  checked={selectedStatuses.includes(status)}
                  onChange={(e) => {
                    if (e.target.checked) {
                      setSelectedStatuses([...selectedStatuses, status]);
                    } else {
                      setSelectedStatuses(
                        selectedStatuses.filter((s) => s !== status)
                      );
                    }
                  }}
                />
                <span>{status.replace("_", " ")}</span>
              </label>
            ))}
          </div>
        </div>
        {!!isLoadingUsers && <div className="form-group">Loading Users</div>}
        {!isLoadingUsers && (
          <div className="form-group">
            <label htmlFor="assignee-filter">Filter by Assignee</label>
            <select
              id="assignee-filter"
              value={selectedAssigneeId}
              onChange={(e) => setSelectedAssigneeId(e.target.value)}
            >
              <option value="">All Assignees</option>
              {users.map((user) => (
                <option key={user.id} value={user.id}>
                  {user.firstName} {user.lastName}
                </option>
              ))}
            </select>
          </div>
        )}
        <div className="form-group">
          <label>
            <input
              type="checkbox"
              checked={showMyTasks}
              onChange={(e) => setShowMyTasks(e.target.checked)}
            />
            <span>My Tasks Only</span>
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="sort-by">Sort By</label>
          <select
            id="sort-by"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as SortField)}
          >
            <option value="createdAt">Date Created</option>
            <option value="title">Title</option>
            <option value="status">Status</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="sort-order">Sort Order</label>
          <select
            id="sort-order"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value as SortOrder)}
          >
            <option value="DESC">Descending</option>
            <option value="ASC">Ascending</option>
          </select>
        </div>
        {isLoading ? (
          <p>Loading tasks…</p>
        ) : (
          <>
            <TaskList
              tasks={tasks}
              currentUser={user || null}
              onEdit={(task) => setEditingTask(task)}
              onDelete={(task) => deleteMutation.mutate(task.id)}
            />
            {pagination && (
              <div className="pagination">
                <div className="pagination-info">
                  Showing{" "}
                  {tasks.length > 0
                    ? (pagination.currentPage - 1) * PAGE_SIZE + 1
                    : 0}
                  -{" "}
                  {Math.min(
                    pagination.currentPage * PAGE_SIZE,
                    pagination.totalCount
                  )}{" "}
                  of {pagination.totalCount} tasks
                </div>
                <div className="pagination-controls">
                  <button
                    onClick={() =>
                      setCurrentPage((prev) => Math.max(1, prev - 1))
                    }
                    disabled={!pagination.hasPreviousPage}
                  >
                    Previous
                  </button>
                  <span className="pagination-pages">
                    Page {pagination.currentPage} of {pagination.totalPages}
                  </span>
                  <button
                    onClick={() => setCurrentPage((prev) => prev + 1)}
                    disabled={!pagination.hasNextPage}
                  >
                    Next
                  </button>
                </div>
              </div>
            )}
          </>
        )}
      </section>
      {canManage && (
        <section className="tasks-section">
          <h2>{editingTask ? "Edit Task" : "Create Task"}</h2>
          <TaskForm
            initialValue={
              editingTask
                ? {
                    title: editingTask.title,
                    description: editingTask.description,
                    status: editingTask.status,
                    assigneeIds: editingTask.assignees.map(
                      (assignee) => assignee.id
                    ),
                  }
                : undefined
            }
            onSubmit={editingTask ? handleUpdate : handleCreate}
            submitLabel={editingTask ? "Update Task" : "Create Task"}
          />
        </section>
      )}
    </div>
  );
};
