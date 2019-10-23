import React from 'react';
import styled from 'styled-components/macro';

import Header from './header/header.component';

interface Props {
  // prop: any;
}
const Sidebar: React.FC<Props> = () => {
  return (
    <>
      <Placeholder />
      <SidebarWrapper>
        <Header text="Header"/>
        <div>aaa</div>
        <div>aaa</div>
        <div>aaa</div>
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
