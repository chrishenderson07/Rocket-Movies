import styled from 'styled-components'

export const Container = styled.div`
	width: 100%;

	> header {
		height: 144px;
		padding: 0 144px;

		display: flex;
		align-items: center;

		background-color: ${({ theme }) => theme.COLORS.PINK_100};

		a {
			color: ${({ theme }) => theme.COLORS.PINK_300};

			display: flex;
			align-items: center;
			gap: 8px;
		}
	}

	@media (max-width: 650px) {
		header {
			padding: 0 20px;
		}
	}
`

export const Form = styled.form`
	display: flex;
	flex-direction: column;
	gap: 8px;
	max-width: 340px;
	margin: 30px auto 0;

	> div:nth-child(3) {
		margin-bottom: 12px;
	}

	> div:nth-child(5) {
		margin-bottom: 22px;
	}
`

export const Avatar = styled.div`
	margin: -124px auto 32px;
	position: relative;

	img {
		width: 186px;
		height: 186px;
		border-radius: 100px;
	}

	input {
		display: none;
	}

	label {
		position: absolute;
		bottom: 0px;
		right: 8px;

		width: 46px;
		height: 46px;
		border-radius: 50%;
		background-color: ${({ theme }) => theme.COLORS.PINK_300};

		display: flex;
		justify-content: center;
		align-items: center;

		cursor: pointer;
	}

	svg {
		color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
	}

	@media (max-width: 400px) {
		margin: -84px auto 32px;

		img {
			width: 126px;
			height: 126px;
		}
	}
`
