import { useCallback, useState } from "react";
import "./App.scss";
import { TaskT } from "./types/Task";
import Card from "./components/Card";
import TaskList from "./components/Task/TaskList";
import Modal from "./components/Modal";
import { formatValue, generateId, onValidateFields } from "./utils/helpers";

function App() {
  const [tasks, setTasks] = useState<TaskT[]>([]);
  const [title, setTitle] = useState("");
  const [time, setTime] = useState("");
  const [message, setMessage] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [task, setTask] = useState<TaskT | null>(null);
  const [modalTitle, setModalTitle] = useState("");
  const [isDelete, setDelete] = useState(false);

  const totalHours = tasks.reduce((time, task) => time + task.time, 0);

  const onSubmitTask = () => {
    setMessage("");
    const validate = onValidateFields(title, time);
    if (typeof validate === "string") {
      setOpenModal(true);
      setMessage(validate);
      setModalTitle("Error");
    } else {
      const task: TaskT = {
        id: generateId(),
        time: parseInt(time),
        title: title.trim()
      };
      setTasks((oldTasks) => [...oldTasks, task]);
      setTitle("");
      setTime("");
    }
  };

  const onDeleteTask = (task: TaskT) => {
    setTask(task);
    setDelete(true);
    setModalTitle("Delete Confirmaion");
    setMessage(`Are you sure you want to delete task '${task.title}'`);
    setOpenModal(true);
  };

  const confirmDeleteTask = useCallback(() => {
    setOpenModal(false);
    setMessage("");
    setTasks((tasks) => tasks.filter((t) => t.id !== task?.id));
    setDelete(false);
  }, [task]);

  return (
    <>
      <div className="tasks-container">
        <h4>Task Management App</h4>
        <div className="card-display">
          <Card
            title="Total Tasks"
            value={formatValue(tasks.length.toString())}
          />
          <Card
            title="Total Days"
            value={formatValue(Math.round(totalHours / 8).toString())}
          />
          <Card
            title="Total Hours"
            value={formatValue(totalHours.toString())}
          />
        </div>
        <div className="task-form">
          <div className="form-input">
            <label htmlFor="title">Task title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              id="title"
              placeholder="Enter title of task..."
            />
          </div>
          <div className="form-input">
            <label htmlFor="time">Time Required (in Hrs)</label>
            <input
              type="text"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              id="time"
              placeholder="Enter time required in hrs.."
            />
          </div>
          <button onClick={onSubmitTask}>Add</button>
        </div>
        <h4>Todo list</h4>
        <div className="task-list">
          <TaskList onDelete={onDeleteTask} tasks={tasks} />
        </div>
      </div>
      {openModal && (
        <Modal
          title={modalTitle}
          content={message}
          onOpenModal={setOpenModal}
          onOk={confirmDeleteTask}
          isDelete={isDelete}
        />
      )}
    </>
  );
}

export default App;
