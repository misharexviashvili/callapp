import "./Modal.css";
import { formik } from "formik";
// TODO: in submit i should add axios.post to update server, also i should update UI with newly added user
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
