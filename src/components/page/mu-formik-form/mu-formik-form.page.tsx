import React from 'react';
import * as yup from 'yup';
import { Formik, Form, Field } from 'formik';
import { TextFormField } from 'components/common/mu-text-form-field/mu-text-form-field.component';
import { SelectFormField } from 'components/common/mu-select-form-field/mu-select-form-field.component';

const schema = yup.object({
  username: yup
    .string()
    .required()
    .min(3),
  email: yup.string().email(),
});

const App: React.FC = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Mu Formik Form</h1>
      <div style={{ width: 200, margin: 'auto' }}>
        <Formik
          validationSchema={schema}
          initialValues={{ username: '', email: '', pet: '' }}
          onSubmit={() => {}}
        >
          {() => (
            <Form>
              <div>
                <Field label="Username" name="username" component={TextFormField} />
              </div>
              <div>
                <Field label="Email" name="email" component={TextFormField} />
              </div>
              <div>
                <Field
                  options={[{ label: 'Dog', value: 'dog' }, { label: 'Cat', value: 'cat' }]}
                  label="Pet"
                  name="pet"
                  component={SelectFormField}
                />
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default App;
