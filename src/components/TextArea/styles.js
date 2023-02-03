import styled from 'styled-components'

export const Container = styled.textarea`
	width: 100%;
	height: 275px;
	padding: 20px 0 0 20px;

	background: ${({ theme }) => theme.COLORS.BACKGROUND_700};
	border-radius: 10px;
	border: none;
	outline: none;
	resize: none;

	grid-area: textArea;

	color: ${({ theme }) => theme.COLORS.GRAY_100};
	font-family: 'Roboto', sans-serif;
	font-size: 14px;

	&::placeholder {
		color: ${({ theme }) => theme.COLORS.GRAY_300};
		font-family: 'Roboto Slab', sans-serif;
		font-size: 14px;
	}
`
