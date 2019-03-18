import React from 'react';
import classnames from 'classnames';

const InputFeedback = ({ children }) => (
  <div className="text-danger">{children}</div>
);

const Label = ({ error, children, ...props }) => {
  return <label {...props}>{children}</label>;
};

const FormInput = ({
  field: { name, ...field },
  form: { touched, errors },
  className,
  label,
  type,
  ...props
}) => {
  const error = errors[name];
  const touch = touched[name];
  // const classes = classnames('form-group', {'animated shake error': !!error,}, className)
  const classes = classnames('form-group', className);
  return (
    <div className={classes}>
      <Label htmlFor={name}>{label}</Label>
      <input
        id={name}
        name={name}
        className="form-control"
        type={type}
        {...field}
        {...props}
      />
      {touch && error && <InputFeedback>{error}</InputFeedback>}
    </div>
  );
};

export default FormInput;
