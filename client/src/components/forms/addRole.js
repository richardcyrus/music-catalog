import React from 'react';
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';
import FormInput from './formInput';
import FormTextArea from './formTextArea';
import Api from '../../utils/api';

const RoleForm = () => {
  return (
    <React.Fragment>
      <Form>
        <Field
          name="name"
          placeholder="Role name"
          label="Role Name"
          type="text"
          component={FormInput}
        />
        <Field
          name="description"
          placeholder="Role description"
          label="Role Description"
          component={FormTextArea}
        />
        <button className="btn btn-primary" type="submit">
          Save
        </button>
      </Form>
    </React.Fragment>
  );
};

const RoleSchema = Yup.object().shape({
  name: Yup.string()
    .min(5, 'The role name needs to be at least 5 characters.')
    .max(255, 'The role name should not be more than 255 characters.')
    .required('The role name is required.'),
  description: Yup.string()
    .max(1024)
    .required('The role description is required.'),
});

const AddRoleForm = withFormik({
  mapPropsToValues: () => ({
    name: '',
    description: '',
  }),
  validationSchema: RoleSchema,
  handleSubmit: (values, { setErrors, setSubmitting, props }) => {
    Api.addRole(values)
      .then(() => {
        setSubmitting(false);
        props.history.push('/roles');
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
  displayName: 'AddRoleForm',
})(RoleForm);

export default AddRoleForm;
