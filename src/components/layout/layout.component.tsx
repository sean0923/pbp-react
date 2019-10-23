import React from 'react';
import styled from 'styled-components/macro';

import Sidebar from './sidebar/sidebar.component';
import SwitchAndRoutes from './switch-and-routes/switch-and-route.component';

const Layout: React.FC = () => {
  return (
    <Wrapper>
      <Sidebar />
      <BodyWrapper>
        <SwitchAndRoutes />
      </BodyWrapper>
    </Wrapper>
  );
};

export default Layout;

const Wrapper = styled.div`
  display: flex;
`;

const BodyWrapper = styled.div`
  padding: 60px 80px;
`;
