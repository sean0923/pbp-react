import React from 'react';
import styled from 'styled-components/macro';
import { FieldProps, getIn } from 'formik';
import { Dropdown } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

interface Option {
  key: string;
  text: string;
  value: string;
}

interface Props extends FieldProps {
  label?: string;
  options: Option[];
}
const SuDropdown: React.FC<Props> = ({ form, field, label, options, ...rest }) => {
  console.log('options: ', options);
  const errorText = getIn(form.touched, field.name) && getIn(form.errors, field.name);
  return (
    <div>
      {label && <Label>{label}</Label>}
      {/* <Dropdown {...field} {...rest} error={!!errorText} /> */}
      <Dropdown
        {...field}
        {...rest}
        fluid
        selection
        options={options}
        error={!!errorText}
        onChange={(e, data) => {
          form.setFieldValue(data.name, data.value);
        }}
        onBlur={(e, data) => {
          form.setTouched(data.name);
        }}
      />
      {/* <Dropdown placeholder="Select Friend" fluid selection options={options} /> */}
      {errorText && <ErrorText>{errorText}</ErrorText>}
    </div>
  );
};

export default SuDropdown;

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
