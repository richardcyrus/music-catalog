import React from 'react';
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';
import FormInput from './formInput';
import FormSelect from './formSelect';

const vocalRange = [
  'Alto 1',
  'Alto 2',
  'Baritone',
  'Bass',
  'Soprano 1',
  'Soprano 2',
  'Tenor 1',
  'Tenor 2',
];

const MemberForm = () => {
  return (
    <React.Fragment>
      <Form>
        <Field
          name="givenName"
          placeholder="John"
          label="First Name"
          type="text"
          component={FormInput}
        />
        <Field
          name="familyName"
          placeholder="Doe"
          label="Last Name"
          type="text"
          component={FormInput}
        />
        <Field
          name="emailAddress"
          placeholder="john.doe@example.com"
          label="Email Address"
          type="email"
          component={FormInput}
        />
        <Field
          name="phoneNumber"
          placeholder="(000) 000-0000"
          label="Phone Number"
          type="tel"
          component={FormInput}
        />
        <Field
          name="mailingAddress"
          placeholder="123 Easy Street, Charlotte, NC 28200"
          label="Mailing Address"
          type="text"
          component={FormInput}
        />
        <Field
          name="vocalRange"
          label="Vocal Range"
          data={vocalRange}
          component={FormSelect}
        />
        <Field
          name="gender"
          placeholder="Male"
          label="Gender"
          type="text"
          component={FormInput}
        />
        <Field
          name="pronoun"
          placeholder="He, Him / She, Her / They, Them"
          label="Pronoun"
          type="text"
          component={FormInput}
        />
        <button className="btn btn-primary" type="submit">
          Save
        </button>
      </Form>
    </React.Fragment>
  );
};

const MemberSchema = Yup.object().shape({
  givenName: Yup.string().required('Required'),
  familyName: Yup.string().required('Required'),
  emailAddress: Yup.string()
    .email()
    .required('Required'),
  phoneNumber: Yup.string().required('Required'),
  mailingAddress: Yup.string()
    .nullable(true)
    .notRequired(),
  vocalRange: Yup.string()
    .oneOf(vocalRange, `Please choose one of ${values}`)
    .required('Required'),
  gender: Yup.string()
    .nullable(true)
    .notRequired(),
  pronoun: Yup.string()
    .nullable(true)
    .notRequired(),
});

const AddMemberForm = withFormik({
  mapPropsToValues: () => ({
    givenName: '',
    familyName: '',
    emailAddress: '',
    phoneNumber: '',
    mailingAddress: '',
    vocalRange: '',
    gender: '',
    pronoun: '',
  }),
  validationSchema: MemberSchema,
  handleSubmit: (values) => {
    console.log(values);
  },
  displayName: 'AddMemberForm',
})(MemberForm);

export default AddMemberForm;
