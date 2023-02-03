import styled from 'styled-components'

export const Container = styled.span`
	padding: 6px 16px;
	background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
	color: ${({ theme }) => theme.COLORS.GRAY_100};
	font-family: 'Roboto', sans-serif;
	font-size: 14px;
	font-weight: 400;

	border-radius: 8px;
	text-align: center;
	margin-right: 8px;
`
