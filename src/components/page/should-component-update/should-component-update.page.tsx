import React from 'react';
// import styled from 'styled-components/macro';
import _ from 'lodash';

import Input from './scu-input.component';

interface Props {
  prop: any;
}
const MemoAndUseCallbackPage: React.FC<Props> = () => {
  const initialFormValues = _.range(2).reduce((acc: any, i) => {
    // const initialFormValues = _.range(10).reduce((acc: any, i) => {
    // const initialFormValues = _.range(1000).reduce((acc: any, i) => {
    acc[i] = '';
    return acc;
  }, {});

  const [formValues, setFormValues] = React.useState(initialFormValues);

  console.log('formValues: ', formValues);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    console.log('name: ', name, value);
    setFormValues({ ...formValues, [name]: value });
  };

  return (
    <div>
      <h1> MemoAndUseCallbackPage </h1>
      {_.map(formValues, (formValue, label) => {
        return (
          <Input key={label} label={label} value={formValue} name={label} onChange={handleChange} />
        );
      })}
    </div>
  );
};

export default MemoAndUseCallbackPage;
