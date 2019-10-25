import React from 'react';
import styled from 'styled-components/macro';
import { withRouter, RouteComponentProps } from 'react-router-dom';

import { navItemWithPages } from 'data/nav/nav.data';

interface Props extends RouteComponentProps {
  // prop: any;
}
const NavItems: React.FC<Props> = ({ history }) => {
  const { push } = history;

  return (
    <Wrapper>
      {navItemWithPages.pages.map(({ path, text }) => {
        return (
          <NavItem key={path} onClick={() => push(path)}>
            {text}
          </NavItem>
        );
      })}
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
