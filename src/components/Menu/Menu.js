import React from 'react';
import styled from 'styled-components';

import Link from '../Link';

const bgColor = 'yellow';

const MenuWrapper = styled.nav`
  background-color: ${bgColor};
  border-bottom: #000 1px solid;
`;

function Menu() {
	return(
  	<MenuWrapper>
      <Link />
      <Link />
      <Link active />
    </MenuWrapper>
  );
}

export default Menu;
