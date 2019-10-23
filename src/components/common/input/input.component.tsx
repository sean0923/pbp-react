import React from 'react';
import styled from 'styled-components/macro';

const Input: React.FC = ({ ...rest }) => {
  return <StyledInput {...rest} />;
};

export default Input;

const StyledInput = styled.input``;
