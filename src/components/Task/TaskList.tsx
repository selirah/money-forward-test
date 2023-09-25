import "./index.scss";
import { TaskT } from "../../types/Task";
import Task from "./Task";

type Props = {
  tasks: TaskT[];
  onDelete: (task: TaskT) => void;
};

const TaskList: React.FC<Props> = (props) => {
  const { onDelete, tasks } = props;

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Task Title</th>
            <th>Time Required (in Hrs)</th>
            <th className="action">Action</th>
          </tr>
        </thead>
        <tbody>
          {tasks && tasks.length
            ? tasks.map((task) => (
                <Task key={task.id} onDelete={onDelete} task={task} />
              ))
            : null}
        </tbody>
      </table>
    </>
  );
};

export default TaskList;
