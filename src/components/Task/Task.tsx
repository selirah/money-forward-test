import { TaskT } from "../../types/Task";

type Props = {
  task: TaskT;
  onDelete: (task: TaskT) => void;
};

const Task: React.FC<Props> = (props) => {
  const { onDelete, task } = props;

  return (
    <tr>
      <td>{task.title}</td>
      <td>{task.time}</td>
      <td className="delete">
        <button onClick={() => onDelete(task)}>Delete</button>
      </td>
    </tr>
  );
};

export default Task;
