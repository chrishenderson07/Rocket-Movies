import styled from 'styled-components'

export const Container = styled.div`
	width: 100%;
	padding: 50px 0;

	> h2 {
		font-size: 20px;
		font-weight: 400;
		color: ${({ theme }) => theme.COLORS.GRAY_100};
	}
`
