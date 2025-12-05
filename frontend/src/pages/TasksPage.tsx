import { useMemo, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createTask, deleteTask, fetchTasks, updateTask } from "../api/tasks";
import { Task, TaskInput } from "../types/task";
import { TaskForm } from "../components/TaskForm";
import { TaskList } from "../components/TaskList";
import { useAuth } from "../hooks/useAuth";
import { fetchUsers } from "../api/users";

export const TasksPage = () => {
  const queryClient = useQueryClient();
  const { user } = useAuth();
  const [editingTask, setEditingTask] = useState<Task | null>(null);
  const [selectedAssigneeId, setSelectedAssigneeId] = useState<string>("");

  const { data: tasks = [], isLoading } = useQuery({
    queryKey: ["tasks"],
    queryFn: fetchTasks,
  });

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
  });

  const deleteMutation = useMutation({
    mutationFn: deleteTask,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["tasks"] }),
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

  const filteredTasks = useMemo(() => {
    if (!selectedAssigneeId) return tasks;
    return tasks.filter((task) =>
      task.assignees.some((assignee) => assignee.id === selectedAssigneeId)
    );
  }, [tasks, selectedAssigneeId]);

  return (
    <div className="tasks-page">
      <section className="tasks-section">
        <h2>Tasks</h2>
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
        {isLoading ? (
          <p>Loading tasks…</p>
        ) : (
          <TaskList
            tasks={filteredTasks}
            currentUserId={user?.id}
            onEdit={canManage ? (task) => setEditingTask(task) : undefined}
            onDelete={
              canManage ? (task) => deleteMutation.mutate(task.id) : undefined
            }
          />
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
