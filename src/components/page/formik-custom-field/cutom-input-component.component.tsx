import React from 'react';
import { FieldProps } from 'formik';

interface Props extends FieldProps {}
const CustomInputComponent: React.FC<Props> = ({
  field, // { name, value, onChange, onBlur }
  form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  ...props
}) => (
  <div>
    <input type="text" {...field} {...props} />
    {touched[field.name] && errors[field.name] && <div className="error">{errors[field.name]}</div>}
  </div>
);

export default CustomInputComponent;
