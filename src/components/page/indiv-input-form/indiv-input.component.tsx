import React from 'react';
import { Input } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

interface Props {
  label: string;
  value: string;
  name: string;
  onChange: (name: string, value: string) => void;
}
const IndivInput: React.FC<Props> = ({ label, value, name, onChange }) => {
  const [state, setState] = React.useState({
    value,
    label,
    name,
  });

  React.useEffect(() => {
    onChange(state.name, state.value);
  }, [state.name, state.value, onChange]);

  // console.log('name', name);

  return (
    <div>
      <Input
        label={state.label}
        value={state.value}
        name={state.name}
        onChange={(e) => {
          setState({ ...state, value: e.target.value });
        }}
      />
    </div>
  );
};

export default React.memo(IndivInput);
