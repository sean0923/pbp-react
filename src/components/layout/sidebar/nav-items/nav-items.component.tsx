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
      <NavItem onClick={() => push('/formik-basic')}>Formik Basic</NavItem>
      <NavItem onClick={() => push('/formik-reducing-boilerplate')}>
        Formik Reducing Boilerplate
      </NavItem>
      <NavItem onClick={() => push('/formik-field')}>Formik Field</NavItem>
      <NavItem onClick={() => push('/mu-formik-form')}>Mu Fromik Form</NavItem>
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
