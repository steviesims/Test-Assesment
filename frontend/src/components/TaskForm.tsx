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

  const { data: users = [], isLoading } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });

  const selectedUsers = useMemo(
    () => users.filter(({ id }) => form.assigneeIds?.includes(id)),
    [users, form]
  );

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
                {users.map((user) => (
                  <label key={user.id} className="dropdown-item">
                    <input
                      type="checkbox"
                      checked={form.assigneeIds?.includes(user.id) ?? false}
                      onChange={() => handleAssigneeToggle(user.id)}
                    />
                    {user.firstName} {user.lastName} - {user.email}
                  </label>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
      <button type="submit">{submitLabel}</button>
    </form>
  );
};
