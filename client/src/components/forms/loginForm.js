import React from 'react';
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';
import FormInput from './formInput';
import Api from '../../utils/api';
import jwtDecode from 'jwt-decode';

const RenderForm = () => {
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
        <button
          className="btn btn-login btn-lg btn-block text-uppercase mb-2 font-weight-bold"
          type="submit"
        >
          Sign in
        </button>
      </Form>
    </React.Fragment>
  );
};

const LoginFormSchema = Yup.object().shape({
  username: Yup.string().required('Please enter your user name.'),
  password: Yup.string().required('Please enter your password.'),
});

const LoginForm = withFormik({
  mapPropsToValues: () => ({
    username: '',
    password: '',
  }),
  validationSchema: LoginFormSchema,
  handleSubmit: async (values, { props }) => {
    const user = {
      username: values.username,
      password: values.password,
    };

    try {
      const result = await Api.loginUser(user);

      const { token } = result.data;
      // eslint-disable-next-line no-unused-vars
      const decode = jwtDecode(token);

      sessionStorage.setItem('token', token);

      Api.setAuthToken(token);

      props.userHasAuthenticated(true);
    } catch (error) {
      props.handleLogout();
    }
  },
  displayName: 'LoginForm',
})(RenderForm);

export default LoginForm;
