import { getInitials } from "../utils/helpers";
import { Task } from "../types/task";
import { AuthUser } from "../types/auth";
import { canEditTask, canDeleteTask } from "../utils/permissions";

type TaskListProps = {
  tasks: Task[];
  currentUser: AuthUser | null;
  onEdit?: (task: Task) => void;
  onDelete?: (task: Task) => void;
};

export const TaskList = ({
  tasks,
  currentUser,
  onEdit,
  onDelete,
}: TaskListProps) => {
  if (!tasks.length) {
    return <p className="empty-state">No tasks yet.</p>;
  }

  return (
    <div className="task-list">
      {tasks.map((task) => {
        const isAssignedToCurrentUser =
          currentUser &&
          task.assignees.some((assignee) => assignee.id === currentUser.id);

        const canEdit = canEditTask(task, currentUser);
        const canDelete = canDeleteTask(task, currentUser);

        return (
          <article
            key={task.id}
            className={`task-card ${isAssignedToCurrentUser ? "my-task" : ""}`}
          >
            <header className="task-card__header">
              <h3>{task.title}</h3>
              <span className={`status status-${task.status}`}>
                {task.status.replace("_", " ")}
              </span>
            </header>
            <p>{task.description}</p>
            <dl>
              <div>
                <dt>Owner</dt>
                <dd>
                  {task.owner.firstName} {task.owner.lastName}
                </dd>
              </div>
              <div>
                <dt>Assignees</dt>
                <dd>
                  {!!task.assignees.length && (
                    <div className="avatar-group">
                      {task.assignees.map(({ id, firstName, lastName }) => (
                        <div key={id} className="avatar">
                          {getInitials(firstName, lastName)}
                        </div>
                      ))}
                    </div>
                  )}
                </dd>
              </div>
            </dl>
            {(canEdit || canDelete) && (
              <footer className="task-card__actions">
                {canEdit && onEdit && (
                  <button type="button" onClick={() => onEdit(task)}>
                    Edit
                  </button>
                )}
                {canDelete && onDelete && (
                  <button
                    type="button"
                    onClick={() => onDelete(task)}
                    className="danger"
                  >
                    Delete
                  </button>
                )}
              </footer>
            )}
          </article>
        );
      })}
    </div>
  );
};
