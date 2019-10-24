import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as yup from 'yup';

import SuInput from './su-input.component';
import SuDropdown from './su-dropdown.component';

const schema = yup.object({
  username: yup
    .string()
    .required()
    .min(3),
  email: yup.string().email(),
});
interface Props {
  prop: any;
}
const SuFormikForm: React.FC<Props> = () => {
  return (
    <div>
      <h1>SuFormikForm</h1>

      <Formik
        validationSchema={schema}
        initialValues={{ username: '', email: '', pet: '' }}
        onSubmit={() => {}}
        render={() => {
          return (
            <Form>
              <div>
                <Field label="Username" name="username" component={SuInput} />
              </div>
              <div>
                <Field
                  label="Pet"
                  name="pet"
                  options={[
                    { key: 'dog', text: 'dog', value: 'dog' },
                    { key: 'cat', text: 'cat', value: 'cat' },
                    { key: 'rabbit', text: 'rabbit', value: 'rabbit' },
                  ]}
                  component={SuDropdown}
                />
              </div>
            </Form>
          );
        }}
      />
    </div>
  );
};

export default SuFormikForm;
