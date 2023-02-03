import styled from 'styled-components'

export const Container = styled.button`
	background: transparent;

	color: ${({ theme }) => theme.COLORS.PINK_300};
	font-size: 18px;
	font-family: 'Roboto Slab', sans-serif;

	display: flex;
	justify-content: center;
	align-items: center;
	gap: 8px;
`
