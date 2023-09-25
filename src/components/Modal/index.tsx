import ReactDOM from "react-dom";
import "./index.scss";

type Props = {
  title: string;
  content: string;
  onOpenModal: (value: boolean) => void;
  onOk?: () => void | null;
  isDelete: boolean;
};

const Modal: React.FC<Props> = (props) => {
  const { content, title, onOpenModal, onOk, isDelete } = props;
  return ReactDOM.createPortal(
    <div className="modal-bg">
      <div className="modal-container">
        <div className="modal-header">
          <div className="title">
            <h4>{title}</h4>
          </div>
          <button onClick={() => onOpenModal(false)}>X</button>
        </div>
        <div className="body">
          <p>{content}</p>
        </div>
        <div className="footer">
          <button onClick={() => onOpenModal(false)} id="cancel">
            Cancel
          </button>
          {isDelete && <button onClick={onOk}>Ok</button>}
        </div>
      </div>
    </div>,
    document.body
  );
};

export default Modal;
