import "./Modal.css";
import { Formik, Field } from "formik";
import * as Yup from "yup";
import ErrorComponent from "./ErrorComponent";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  gender: Yup.string().required().label("Gender"),
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
      initialValues={{
        email: "",
        name: "",
        address: "",
        phoneNumber: "",
        gender: "",
      }}
      onSubmit={(values, { reseAll }) => console.log(values)}
      validationSchema={validationSchema}
    >
      {({ handleChange, handleSubmit, errors, touched }) => (
        <div className="bluredBackground">
          <div className="modal">
            <h1 className="modalHeader">Please, Fill Out Form To Add User</h1>
            <input
              className="input"
              placeholder="Insert name"
              onChange={handleChange("name")}
            />

            <ErrorComponent>{touched.name && errors?.name}</ErrorComponent>
            <input
              className="input"
              placeholder="Insert email"
              onChange={handleChange("email")}
            />
            <ErrorComponent>{touched.email && errors?.email}</ErrorComponent>

            {/* <div className="dropDown">
              <label htmlFor="gender">Gender : </label>
              <select id="gender" name="gender">
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div> */}

            <div className="dropDown">
              <label htmlFor="gender">Gender : </label>
              <Field as="select" id="gender" name="gender" className="selectable">
                <option value="">Select gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </Field>
              <ErrorComponent>
                {touched.gender && errors?.gender}
              </ErrorComponent>
            </div>

            <input
              className="input"
              placeholder="Insert address"
              onChange={handleChange("address")}
            />
            <ErrorComponent>
              {touched.address && errors?.address}
            </ErrorComponent>
            <input
              className="input"
              placeholder="Insert phone number"
              onChange={handleChange("phoneNumber")}
            />
            <ErrorComponent>
              {touched.phoneNumber && errors?.phoneNumber}
            </ErrorComponent>
            <div className="btnContainer">
              <button className="modalBtn" type="submit" onClick={handleSubmit}>
                Submit
              </button>
              <button className="modalBtn" onClick={hideModal}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </Formik>
  ) : null;
};

export default Modal;
