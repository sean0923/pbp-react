import React from 'react';
import styled from 'styled-components/macro';
import { withRouter, RouteComponentProps } from 'react-router-dom';

interface Props extends RouteComponentProps {
  // prop: any;
}
const NavItems: React.FC<Props> = ({ history }) => {
  const { push } = history;
  return (
    <Wrapper>
      <NavItem onClick={() => push('/aaa')}>AAA</NavItem>
      <NavItem onClick={() => push('/bbb')}>BBB</NavItem>
      <NavItem onClick={() => push('/ccc')}>CCC</NavItem>
    </Wrapper>
  );
};

export default withRouter(NavItems);

const Wrapper = styled.div``;

const NavItem = styled.div`
  background-color: var(--color-test);
  padding: 8px 16px;
  margin-bottom: 4px;
  cursor: pointer;

  &:hover {
    background-color: rgba(0, 0, 0, 0.2);
  }
`;
