import React from 'react';
import styled from 'styled-components/macro';

import Header from './header/header.component';
import NavItems from './nav-items/nav-items.component';

interface Props {
  // prop: any;
}
const Sidebar: React.FC<Props> = () => {
  return (
    <>
      <Placeholder />
      <SidebarWrapper>
        <Header text="Header" />
        <NavItems />
      </SidebarWrapper>
    </>
  );
};

export default Sidebar;

const commonStyles = `
  padding: 40px;
  
  width: 20vw;
  height: 100vh;
`;

const Placeholder = styled.div`
  ${commonStyles};
`;

const SidebarWrapper = styled.div`
  background-color: var(--color-test);
  position: fixed;
  top: 0;
  left: 0;
  ${commonStyles};
`;
