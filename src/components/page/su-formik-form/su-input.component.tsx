import React from 'react';
import styled from 'styled-components/macro';
import { FieldProps, getIn } from 'formik';
import { Input } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

interface Props extends FieldProps {
  label?: string;
}
const SuInput: React.FC<Props> = ({ form, field, label, ...rest }) => {
  const errorText = getIn(form.touched, field.name) && getIn(form.errors, field.name);
  console.table(form);
  console.table(field);
  console.table(rest);
  return (
    <div>
      {label && <Label>{label}</Label>}
      <Input {...field} {...rest} error={!!errorText} />
      {errorText && <ErrorText>{errorText}</ErrorText>}
    </div>
  );
};

export default SuInput;

const Label = styled.label`
  display: block;
  margin: 0 0 0.28571429rem 0;
  color: rgba(0, 0, 0, 0.87);
  font-size: 0.92857143em;
  font-weight: 700;
  text-transform: none;
`;

const ErrorText = styled.div`
  color: red;
  display: block;
  margin: 0.28571429rem 0 0 0;
  font-size: 0.92857143em;
  font-weight: 700;
  text-transform: none;
`;
