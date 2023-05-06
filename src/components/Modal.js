import "./Modal.css";
import { Formik, Field } from "formik";
import * as Yup from "yup";
import ErrorComponent from "./ErrorComponent";
import axios from "axios";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  gender: Yup.string().required().label("Gender"),
  email: Yup.string().required().email().label("Email"),
  street: Yup.string().label("Street"),
  city: Yup.string().label("City"),
  phoneNumber: Yup.string()
    .min(5, "Phone number must be at list 5 digits long")
    .label("Phone Number"),
});
// TODO: in submit i should add axios.post to update server, also i should update UI with newly added user
const Modal = ({ shown, hideModal }) => {
  return shown ? (
    <Formik
      initialValues={{
        name: "",
        email: "",
        gender: "",
        street: "",
        city: "",
        phoneNumber: "",
      }}
      onSubmit={async (values) => {
        // console.log(values);
        try {
          await axios.post("http://127.0.0.1:5000/api/data", {
            id: Date.now(),
            name: values.name,
            email: values.email,
            gender: values.gender,
            address: {
              street: values.street,
              city: values.city,
            },
            phone: values.phoneNumber,
          });
          hideModal();
          window.location.reload();
        } catch (error) {
          console.log(error);
          alert("Something went wrong, please try again later");
        }
      }}
      validationSchema={validationSchema}
    >
      {({ handleChange, handleSubmit, errors, touched }) => (
        <div className="bluredBackground">
          <div className="modal">
            <h1 className="modalHeader">Please, fill out form</h1>
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

            <div className="dropDown">
              <label htmlFor="gender">Gender : </label>
              <Field
                as="select"
                id="gender"
                name="gender"
                className="selectable"
              >
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
              placeholder="Insert street"
              onChange={handleChange("street")}
            />
            <ErrorComponent>{touched.street && errors?.street}</ErrorComponent>

            <input
              className="input"
              placeholder="Insert city"
              onChange={handleChange("city")}
            />
            <ErrorComponent>{touched.city && errors?.city}</ErrorComponent>

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
                Add
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
