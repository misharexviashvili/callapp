import "./Modal.css";
import { Formik } from "formik";
import * as Yup from "yup";
import ErrorComponent from "./ErrorComponent";
const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  address: Yup.string().required().label("Address"),
  phoneNumber: Yup.string()
    .required()
    .min(5, "Phone number must be at list 5 digits long")
    .label("Phone Number"),
});
// TODO: in submit i should add axios.post to update server, also i should update UI with newly added user
const Modal = ({ shown, hideModal }) => {
  return shown ? (
    <Formik
      initialValues={{ email: "", name: "", address: "", phoneNumber: "" }}
      onSubmit={(values) => console.log(values)}
      validationSchema={validationSchema}
    >
      {({ handleChange, handleSubmit, errors }) => (
        <div className="modal">
          <h1 className="modalHeader">Please, Fill Out Form To Add User</h1>
          <input placeholder="Insert name" onChange={handleChange("name")} />

          <ErrorComponent>{errors?.name}</ErrorComponent>
          <input placeholder="Insert email" onChange={handleChange("email")} />
          <ErrorComponent>{errors?.email}</ErrorComponent>
          {/* Gender should be select type and should go here */}
          <input
            placeholder="Insert address"
            onChange={handleChange("address")}
          />
          <ErrorComponent>{errors?.address}</ErrorComponent>
          <input
            placeholder="Insert phone number"
            onChange={handleChange("phoneNumber")}
          />
          <ErrorComponent>{errors?.phoneNumber}</ErrorComponent>
          <div>
            <button type="submit" onClick={handleSubmit}>
              Submit
            </button>
            <button onClick={hideModal}>Cancel</button>
          </div>
        </div>
      )}
    </Formik>
  ) : null;
};

export default Modal;
