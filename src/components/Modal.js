import "./Modal.css";

const Modal = ({ shown, hideModal, onSubmit }) => {
  return shown ? (
    <div className="modal">
      <h1>THIS IS MODAL</h1>
      <button onClick={onSubmit}>Submit</button>
      <button onClick={hideModal}>Cancel</button>
    </div>
  ) : null;
};

export default Modal;
