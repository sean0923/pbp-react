import React from 'react';
// import styled from 'styled-components/macro';
import * as yup from 'yup';
import { Formik, Field, Form } from 'formik';
import CustomInputComponent from './cutom-input-component.component';

const schema = yup.object({
  firstName: yup
    .string()
    .required()
    .min(3),
});

interface Props {
  prop: any;
}
const FormikCustomField: React.FC<Props> = () => {
  return (
    <div>
      <h1>My Form</h1>
      <Formik
        validationSchema={schema}
        initialValues={{ email: '', color: 'red', firstName: '' }}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            actions.setSubmitting(false);
          }, 1000);
        }}
        render={(props) => {
          console.log('props: ', props);
          return (
            <Form>
              <Field type="email" name="email" placeholder="Email" />
              <Field component="select" name="color">
                <option value="red">Red</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
              </Field>
              <Field placeholder="first name" name="firstName" component={CustomInputComponent} />
              <button type="submit">Submit</button>
            </Form>
          );
        }}
      />
    </div>
  );
};

export default FormikCustomField;
