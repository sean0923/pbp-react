import React from 'react';
// import styled from 'styled-components/macro';
import _ from 'lodash';

import IndivInput from './indiv-input.component';

interface Props {
  prop: any;
}
const IndivInputForm: React.FC<Props> = () => {
  // const numberOfInputs = 1000;
  const numberOfInputs = 500;
  const initialFormValues = _.range(numberOfInputs).reduce((acc: any, i) => {
    // const initialFormValues = _.range(1000).reduce((acc: any, i) => {
    acc[i] = '';
    return acc;
  }, {});

  const [formValues, setFormValues] = React.useState(initialFormValues);

  const handleChange = React.useCallback((name, value) => {
    setFormValues((prevFormValues: any) => {
      return { ...prevFormValues, [name]: value };
    });
  }, []);

  return (
    <div>
      <h1>Indiv Input Form</h1>
      <h1> Number of Inputs: {numberOfInputs} </h1>
      <h2> How to prevent unnecessary re-render solution</h2>
      {_.map(formValues, (formValue, label) => {
        return (
          <IndivInput
            key={label}
            label={label}
            value={formValue}
            name={label}
            onChange={handleChange}
          />
        );
      })}
    </div>
  );
};

export default IndivInputForm;
