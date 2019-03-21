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
          name="title"
          placeholder="Love Is Love"
          label="Title"
          type="text"
          component={FormInput}
        />
        <Field
          name="description"
          label="Description"
          placeholder="A brief description of the piece."
          component={FormTextArea}
        />
        <Field
          name="voices"
          placeholder="SATB, Solo"
          label="Voicing"
          type="text"
          component={FormInput}
        />
        <Field
          name="duration"
          placeholder="4:40"
          label="Duration"
          type="text"
          component={FormInput}
        />
        <Field
          name="style"
          placeholder="50s Doo-wop"
          label="Style"
          type="text"
          component={FormInput}
        />
        <Field
          name="publisher"
          placeholder="Yelton Rhodes Music (BMI)"
          label="Publisher"
          type="text"
          component={FormInput}
        />
        <Field
          name="quantityOnHand"
          label="Number of Copies"
          type="number"
          min="0"
          component={FormInput}
        />
        <Field
          name="purchasePrice"
          placeholder="2.95"
          label="Cost"
          type="number"
          step="0.01"
          min="0"
          component={FormInput}
        />
        <button className="btn btn-primary" type="submit">
          Save
        </button>
      </Form>
    </React.Fragment>
  );
};

const MusicSchema = Yup.object().shape({
  title: Yup.string().required('Required'),
  description: Yup.string()
    .nullable(true)
    .notRequired(),
  voices: Yup.string()
    .nullable(true)
    .notRequired(),
  duration: Yup.string()
    .nullable(true)
    .notRequired(),
  style: Yup.string()
    .nullable(true)
    .notRequired(),
  publisher: Yup.string()
    .nullable(true)
    .notRequired(),
  quantityOnHand: Yup.number()
    .positive()
    .integer()
    .nullable(true)
    .notRequired(),
  purchasePrice: Yup.number()
    .positive()
    .nullable(true)
    .notRequired(),
});

const AddMusicForm = withFormik({
  mapPropsToValues: () => ({
    title: '',
    description: '',
    voices: '',
    duration: '',
    style: '',
    publisher: '',
    quantityOnHand: '',
    purchasePrice: '',
  }),
  validationSchema: MusicSchema,
  handleSubmit: (values) => {
    console.log(values);
  },
  displayName: 'AddMusicForm',
})(RenderForm);

export default AddMusicForm;
