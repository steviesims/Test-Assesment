import { Task } from "../types/task";
import { AuthUser } from "../types/auth";

type TaskListProps = {
  tasks: Task[];
  onEdit?: (task: Task) => void;
  onDelete?: (task: Task) => void;
};

const getInitials = (user: AuthUser): string => {
  return user.firstName.slice(0, 1) + user.lastName.slice(0, 1);
};

export const TaskList = ({ tasks, onEdit, onDelete }: TaskListProps) => {
  if (!tasks.length) {
    return <p className="empty-state">No tasks yet.</p>;
  }

  return (
    <div className="task-list">
      {tasks.map((task) => (
        <article key={task.id} className="task-card">
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
                    {task.assignees.map((assignee) => (
                      <div key={assignee.id} className="avatar">
                        {getInitials(assignee)}
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
      ))}
    </div>
  );
};
