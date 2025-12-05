import { FormEvent, useEffect, useMemo, useState } from "react";
import { TaskInput, TaskStatus } from "../types/task";
import { useQuery } from "@tanstack/react-query";
import { fetchUsers } from "../api/users";

type TaskFormProps = {
  initialValue?: TaskInput;
  onSubmit: (payload: TaskInput) => void;
  submitLabel?: string;
};

const defaultTask: TaskInput = {
  title: "",
  description: "",
  status: "todo",
  assigneeIds: [],
};

const statusOptions: TaskStatus[] = ["todo", "in_progress", "done"];

export const TaskForm = ({
  initialValue,
  onSubmit,
  submitLabel = "Create Task",
}: TaskFormProps) => {
  const computedInitialValue = useMemo<TaskInput>(
    () => initialValue ?? { ...defaultTask },
    [initialValue]
  );

  const [form, setForm] = useState<TaskInput>(computedInitialValue);
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const { data: users = [], isLoading } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });

  const selectedUsers = useMemo(
    () => users.filter(({ id }) => form.assigneeIds?.includes(id)),
    [users, form]
  );

  const filteredUsers = useMemo(() => {
    if (!searchQuery) return users;
    const query = searchQuery.toLowerCase();
    return users.filter(
      (user) =>
        user.firstName.toLowerCase().includes(query) ||
        user.lastName.toLowerCase().includes(query) ||
        user.email.toLowerCase().includes(query)
    );
  }, [users, searchQuery]);

  useEffect(() => {
    setForm(computedInitialValue);
  }, [computedInitialValue]);

  const handleChange = (key: keyof TaskInput, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleAssigneeToggle = (id: string) => {
    setForm((prev) => {
      const { assigneeIds } = prev;
      const isSelected = assigneeIds?.includes(id);
      return {
        ...prev,
        assigneeIds: isSelected
          ? assigneeIds?.filter((userId) => userId !== id)
          : [...(assigneeIds ?? []), id],
      };
    });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(form);
    setForm({ ...defaultTask });
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="task-title">Title</label>
        <input
          id="task-title"
          type="text"
          required
          value={form.title}
          onChange={(event) => handleChange("title", event.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="task-description">Description</label>
        <textarea
          id="task-description"
          value={form.description || ""}
          onChange={(event) => handleChange("description", event.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="task-status">Status</label>
        <select
          id="task-status"
          value={form.status || "todo"}
          onChange={(event) => handleChange("status", event.target.value)}
        >
          {statusOptions.map((status) => (
            <option key={status} value={status}>
              {status.replace("_", " ")}
            </option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="task-assignees">Assignees</label>

        {selectedUsers.length > 0 && (
          <div id="task-assignees" className="assignee-list-container">
            {selectedUsers.map(({ id, firstName, lastName }, idx) => (
              <span key={id}>
                <span>
                  {firstName} {lastName}
                </span>
                {idx < selectedUsers.length - 1 && <span>, </span>}
              </span>
            ))}
          </div>
        )}

        <button
          type="button"
          className="dropdown-trigger"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          {isDropdownOpen ? "Close" : "Select Assignees"}
        </button>

        {isDropdownOpen && (
          <div>
            {isLoading && (
              <div className="dropdown-content">Loading users...</div>
            )}
            {!isLoading && !users.length && (
              <div className="dropdown-content">No users available</div>
            )}
            {!isLoading && !!users.length && (
              <div className="dropdown-content">
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Search users..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onClick={(e) => e.stopPropagation()}
                  />
                </div>
                {!!filteredUsers.length &&
                  filteredUsers.map(({ id, firstName, lastName, roles }) => (
                    <label key={id} className="dropdown-item">
                      <input
                        type="checkbox"
                        checked={form.assigneeIds?.includes(id) ?? false}
                        onChange={() => handleAssigneeToggle(id)}
                      />
                      <div className="user-info">
                        <div className="user-name">
                          {firstName} {lastName}
                        </div>
                        <div className="user-meta">
                          {roles?.length > 0 && (
                            <>
                              <span className="user-separator">•</span>
                              <span className="user-roles">
                                {roles[0]["name"]}
                              </span>
                            </>
                          )}
                        </div>
                      </div>
                    </label>
                  ))}
                {!filteredUsers.length && (
                  <div className="dropdown-empty">
                    No users match your search
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </div>
      <button type="submit">{submitLabel}</button>
    </form>
  );
};
