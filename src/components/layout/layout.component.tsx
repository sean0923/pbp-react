import React from 'react';
import styled from 'styled-components/macro';

import SwitchAndRoutes from './switch-and-routes/switch-and-route.component';

const Layout: React.FC = () => {
  return (
    <Wrapper>
      <SwitchAndRoutes />
    </Wrapper>
  );
};

export default Layout;

const Wrapper = styled.div`
  padding: 40px;
`;
