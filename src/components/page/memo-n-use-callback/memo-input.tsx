import React from 'react';
import { Input } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

interface Props {
  label: string;
  value: string;
  name: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
const MemoInput: React.FC<Props> = ({ label, value, name, onChange }) => {
  return (
    <div>
      <Input label={label} value={value} name={name} onChange={onChange} />
    </div>
  );
};

export default React.memo(MemoInput);
