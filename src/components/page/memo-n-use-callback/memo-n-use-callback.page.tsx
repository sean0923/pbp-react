import React from 'react';
// import styled from 'styled-components/macro';
import _ from 'lodash';

import MemoInput from './memo-input';

interface Props {
  prop: any;
}
const MemoAndUseCallbackPage: React.FC<Props> = () => {
  // const numberOfInputs = 1000;
  const numberOfInputs = 500;
  const initialFormValues = _.range(numberOfInputs).reduce((acc: any, i) => {
    acc[i] = '';
    return acc;
  }, {});

  const [formValues, setFormValues] = React.useState(initialFormValues);

  const handleChange = React.useCallback((e) => {
    const { name, value } = e.target;
    setFormValues((prevFormValues: any) => {
      return { ...prevFormValues, [name]: value };
    });
  }, []);

  return (
    <div>
      <h1>Memo And Callback Form</h1>
      <h1> Number of Inputs: {numberOfInputs} </h1>
      <h2> How to prevent unnecessary re-render solution</h2>
      {_.map(formValues, (formValue, label) => {
        return (
          <MemoInput
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

export default MemoAndUseCallbackPage;
