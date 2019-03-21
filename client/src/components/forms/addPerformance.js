import React from 'react';
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';
import FormInput from './formInput';
import FormTextArea from './formTextArea';

const RenderForm = () => {
  return (
    <React.Fragment>
      <Form>
        <Field
          name="name"
          placeholder="Home"
          label="Name"
          type="text"
          component={FormInput}
        />
        <Field
          name="description"
          placeholder=""
          label="Description"
          component={FormTextArea}
        />
        <Field
          name="startDate"
          label="Start Date"
          type="date"
          component={FormInput}
        />
        <Field
          name="endDate"
          label="End Date"
          type="date"
          component={FormInput}
        />
        <button className="btn btn-primary" type="submit">
          Save
        </button>
      </Form>
    </React.Fragment>
  );
};

const PerformanceSchema = Yup.object().shape({
  name: Yup.string().required('Required'),
  description: Yup.string()
    .nullable(true)
    .notRequired(),
  startDate: Yup.date().required('Required'),
  endDate: Yup.date()
    .nullable(true)
    .notRequired(),
});

const AddPerformanceForm = withFormik({
  mapPropsToValues: () => ({
    name: '',
    description: '',
    startDate: '',
    endDate: '',
  }),
  validationSchema: PerformanceSchema,
  handleSubmit: (values, { props }) => {
    console.log(props);
    console.log(values);
  },
  displayName: 'AddPerformanceForm',
})(RenderForm);

export default AddPerformanceForm;
