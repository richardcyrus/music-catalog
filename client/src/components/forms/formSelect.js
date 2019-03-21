import React from 'react';
import classnames from 'classnames';

const SelectFeedback = ({ children }) => (
  <div className="text-danger">{children}</div>
);

const Label = ({ error, children, ...props }) => {
  return <label {...props}>{children}</label>;
};

const FormSelect = ({
  field: { name, ...field },
  form: { touched, errors },
  className,
  label,
  data,
  ...props
}) => {
  const error = errors[name];
  const touch = touched[name];
  // const classes = classnames('form-group', {'animated shake error': !!error,}, className)
  const classes = classnames('form-group', className);
  const defaultOption = (
    <option key="default" value="Please Select">
      Please Select
    </option>
  );
  const optionElements = data.map((i) => (
    <option key={i} value={i}>
      {i}
    </option>
  ));
  const selectOptions = [defaultOption, ...optionElements];
  return (
    <div className={classes}>
      <Label htmlFor={name}>{label}</Label>
      <select
        value={field.value}
        id={name}
        name={name}
        className="form-control"
        {...field}
        {...props}
      >
        {selectOptions}
      </select>
      {touch && error && <SelectFeedback>{error}</SelectFeedback>}
    </div>
  );
};

export default FormSelect;
