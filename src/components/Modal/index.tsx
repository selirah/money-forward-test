import ReactDOM from "react-dom";
import "./index.scss";

type Props = {
  title?: string;
  content: string;
  onOpenModal: (value: boolean) => void;
  onOk?: () => void;
  okBtnText?: string;
};

const Modal: React.FC<Props> = (props) => {
  const { content, title, onOpenModal, onOk, okBtnText } = props;
  return ReactDOM.createPortal(
    <div className="modal-bg">
      <div className="modal-container">
        <div className="close-button">
          <button onClick={() => onOpenModal(false)}>X</button>
        </div>
        <div className="title">
          <h4>{title && ""}</h4>
        </div>
        <div className="body">
          <p>{content}</p>
        </div>
        <div className="footer">
          <button onClick={() => onOpenModal(false)} id="cancel">
            Cancel
          </button>
          {onOk && <button onClick={onOk}>{okBtnText && "OK"}</button>}
        </div>
      </div>
    </div>,
    document.body
  );
};

export default Modal;
