import React from 'react';
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';
import FormInput from './formInput';
import Api from '../../utils/api';
import Card from 'react-bootstrap/Card';

const RenderForm = ({ isSubmitting, dirty }) => {
  return (
    <React.Fragment>
      <Card border="dark">
        <Card.Body>
          <Form>
            <Field
              name="userLogin"
              placeholder="username"
              label="User name"
              type="text"
              component={FormInput}
            />
            <Field
              name="userPass"
              placeholder="password"
              label="Password"
              type="password"
              component={FormInput}
            />
            <Field
              name="passwordConfirm"
              placeholder="confirm password"
              label="Confirm Password"
              type="password"
              component={FormInput}
            />
            <Field
              name="userEmail"
              placeholder="email address"
              label="Email Address"
              type="email"
              component={FormInput}
            />
            <button
              className="btn btn-primary"
              type="submit"
              disabled={isSubmitting || !dirty}
            >
              Save
            </button>
          </Form>
        </Card.Body>
      </Card>
    </React.Fragment>
  );
};

const UserSchema = Yup.object().shape({
  userLogin: Yup.string()
    .min(5, 'Username needs to be at least 5 characters.')
    .max(50, 'Username should not be more than 50 characters.')
    .required('A user login is required.'),
  userPass: Yup.string()
    .min(8, 'The password should be at least 8 characters.')
    .max(255, 'The password should not be more than 255 characters.')
    .required('A password is required.'),
  passwordConfirm: Yup.string()
    .oneOf([Yup.ref('userPass')], 'Passwords do not match.')
    .required('Password should match.'),
  userEmail: Yup.string()
    .email('Enter a valid email address.')
    .required('An email address is required.'),
});

const AddUserForm = withFormik({
  mapPropsToValues: () => ({
    userLogin: '',
    userPass: '',
    passwordConfirm: '',
    userEmail: '',
  }),
  validationSchema: UserSchema,
  handleSubmit: async (values, { setErrors, setSubmitting, props }) => {
    const user = values;
    user.userActive = true;

    Api.addUser(user)
      .then(() => {
        setSubmitting(false);
        props.history.push('/users');
      })
      .catch((error) => {
        console.log(error);
        if (
          error.response &&
          error.response.data &&
          error.response.data.validationErrors
        ) {
          setErrors(error.response.data.validationErrors);
          setSubmitting(false);
        } else {
          setSubmitting(false);
          throw error;
        }
      });
  },
  displayName: 'AddUserForm',
})(RenderForm);

export default AddUserForm;
