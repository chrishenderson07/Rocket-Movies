import styled from 'styled-components'

export const Container = styled.div`
	width: 100%;
	height: 56px;

	background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
	border-radius: 10px;

	padding: 15px 24px;
	margin-bottom: 8px;
	display: flex;
	align-items: center;
	gap: 8px;

	> input {
		background: transparent;
		border: none;
		outline: none;

		color: ${({ theme }) => theme.COLORS.GRAY_100};

		width: 100%;
		font-size: 14px;
		font-family: 'Roboto', sans-serif;

		&::placeholder {
			color: ${({ theme }) => theme.COLORS.GRAY_300};
			font-family: 'Roboto Slab', sans-serif;
		}
	}

	> svg {
		color: ${({ theme }) => theme.COLORS.GRAY_300};
		margin-right: 12px;
	}
`
