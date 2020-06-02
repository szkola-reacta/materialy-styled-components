import React from 'react';
import styled from 'styled-components';

const LinkBasic = styled.a`
	border: #000 1px solid;
	padding-left: 10x;
	padding-right: 10px;
`;

const MenuLink = styled(LinkBasic)`
	font-weight: bold;
	${props => props.active ? `
		color: white;
		background-color: black;
	` : ``}
`;

function Link({ active }) {
	return(
		<MenuLink active={active} href="/">Name</MenuLink>
	);
}

export default Link;
