import React, { Component } from 'react';
import { Input } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

interface Props {
  label: string;
  value: string;
  name: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
// const SuInput: React.FC<Props> = ({ label, value, name, onChange }) => {
// return (
//   <div>
//     <Input label={label} value={value} name={name} onChange={onChange} />
//   </div>
// );
// };

class SuInput extends Component<Props> {
  shouldComponentUpdate(nextProps: any) {
    const { value: currValue } = this.props;
    const { value: nextValue } = nextProps;

    console.log('currValue: ', currValue, nextValue);
    return currValue !== nextValue;
    // return true
  }

  render() {
    const { label, value, name, onChange } = this.props;
    return (
      <div>
        <Input label={label} value={value} name={name} onChange={onChange} />
      </div>
    );
  }
}

export default SuInput;
