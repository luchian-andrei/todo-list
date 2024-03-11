import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle, faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export default function Todo({ task, toggleComplete, deleteTodo }) {
  return (
    <div className="Todo">
      <div className="Todo-content">
        {task.completed ? (
          <FontAwesomeIcon
            className="icon check-icon"
            icon={faCircleCheck}
            onClick={() => toggleComplete(task.id)}
          />
        ) : (
          <FontAwesomeIcon
            className="icon check-icon"
            icon={faCircle}
            onClick={() => toggleComplete(task.id)}
          />
        )}
        <p
          className={task.completed ? "task completed" : "task uncompleted"}
          onClick={() => toggleComplete(task.id)}
        >
          {task.task}
        </p>
      </div>
      <div className="Todo-icon">
        <FontAwesomeIcon
          className="icon trash-icon"
          icon={faTrash}
          onClick={() => deleteTodo(task.id)}
        />
      </div>
    </div>
  );
}
