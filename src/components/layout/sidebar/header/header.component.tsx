import React from 'react';
import styled from 'styled-components/macro';
import { withRouter, RouteComponentProps } from 'react-router-dom';

interface Props extends RouteComponentProps {
  text: any;
}
const Header: React.FC<Props> = ({ text, history }) => {
  return (
    <Wrapper
      onClick={() => {
        history.push('/');
      }}
    >
      {text}
    </Wrapper>
  );
};

export default withRouter(Header);

const Wrapper = styled.h1`
  margin-bottom: 40px;
  cursor: pointer;
`;
