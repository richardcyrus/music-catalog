import React from 'react';
import classnames from 'classnames';

const TextAreaFeedback = ({ children }) => (
  <div className="text-danger">{children}</div>
);

const Label = ({ error, children, ...props }) => {
  return <label {...props}>{children}</label>;
};

const FormTextArea = ({
  field: { name, ...field },
  form: { touched, errors },
  className,
  label,
  ...props
}) => {
  const error = errors[name];
  const touch = touched[name];
  // const classes = classnames('form-group', {'animated shake error': !!error,}, className)
  const classes = classnames('form-group', className);
  return (
    <div className={classes}>
      <Label htmlFor={name}>{label}</Label>
      <textarea
        id={name}
        name={name}
        className="form-control"
        {...field}
        {...props}
      />
      {touch && error && <TextAreaFeedback>{error}</TextAreaFeedback>}
    </div>
  );
};

export default FormTextArea;
