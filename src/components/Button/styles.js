import styled from 'styled-components'

export const Container = styled.div`
	width: 100%;
	height: 50px;
	padding: 28px;
	border-radius: 8px;

	background-color: ${({ theme }) => theme.COLORS.PINK_300};
	color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
	font-size: 16px;
	font-weight: 500;

	display: flex;
	justify-content: center;
	align-items: center;
	gap: 8px;

	cursor: pointer;
	transition: filter 0.3s;

	&:hover {
		filter: saturate(1.4);
	}
`
