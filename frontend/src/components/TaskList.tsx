import { getInitials } from "../helpers";
import { Task } from "../types/task";

type TaskListProps = {
  tasks: Task[];
  currentUserId?: string;
  onEdit?: (task: Task) => void;
  onDelete?: (task: Task) => void;
};

export const TaskList = ({
  tasks,
  currentUserId,
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
          currentUserId &&
          task.assignees.some((assignee) => assignee.id === currentUserId);

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
            {(onEdit || onDelete) && (
              <footer className="task-card__actions">
                {onEdit && (
                  <button type="button" onClick={() => onEdit(task)}>
                    Edit
                  </button>
                )}
                {onDelete && (
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
