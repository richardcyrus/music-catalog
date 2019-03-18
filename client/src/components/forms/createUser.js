import React from 'react';
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';
import FormInput from './formInput';

const UserForm = (props) => {
  return (
    <React.Fragment>
      <Form>
        <Field
          name="username"
          placeholder="username"
          label="User name"
          type="text"
          component={FormInput}
        />
        <Field
          name="password"
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
          name="email"
          placeholder="email address"
          label="Email Address"
          type="email"
          component={FormInput}
        />
        <button className="btn btn-primary" type="submit">
          Save
        </button>
      </Form>
      <div style={{ margin: '1rem 0', paddingBottom: '1rem' }}>
        <h3 style={{ fontFamily: 'monospace' }}>Props</h3>
        <pre
          style={{
            background: '#f6f8fa',
            fontSize: '.65rem',
            padding: '.5rem',
          }}
        >
          <strong>props</strong> = {JSON.stringify(props, null, 2)}
        </pre>
      </div>
    </React.Fragment>
  );
};

const UserFormSchema = Yup.object().shape({
  username: Yup.string()
    .min(5, 'Username needs to be at least 5 characters.')
    .max(50, 'Username should not be more than 50 characters.')
    .required('A user login is required.'),
  password: Yup.string()
    .min(8, 'The password should be at least 8 characters.')
    .max(255, 'The password should not be more than 255 characters.')
    .required('A password is required.'),
  passwordConfirm: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords do not match.')
    .required('Password should match.'),
  email: Yup.string()
    .email('Enter a valid email address.')
    .required('An email address is required.'),
});

const CreateUserForm = withFormik({
  mapPropsToValues: () => ({
    username: '',
    password: '',
    passwordConfirm: '',
    email: '',
  }),
  validationSchema: UserFormSchema,
  handleSubmit: (values) => {
    console.log(values);
  },
  displayName: 'CreateUserForm',
})(UserForm);

export default CreateUserForm;
