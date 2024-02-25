import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle, faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export default function Todo({ task, toggleComplete, deleteTodo }) {
  return (
    <div className="Todo">
      {task.completed ? (
        <FontAwesomeIcon
          icon={faCircleCheck}
          onClick={() => toggleComplete(task.id)}
        />
      ) : (
        <FontAwesomeIcon
          icon={faCircle}
          onClick={() => toggleComplete(task.id)}
        />
      )}
      <p
        className={task.completed ? "completed" : "uncompleted"}
        onClick={() => toggleComplete(task.id)}
      >
        {task.task}
      </p>
      <FontAwesomeIcon icon={faTrash} onClick={() => deleteTodo(task.id)} />
    </div>
  );
}
