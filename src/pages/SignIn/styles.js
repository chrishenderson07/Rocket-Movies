import styled from 'styled-components'
import backgroundImg from '../../assets/bg-image.jpg'

export const Container = styled.div`
	height: 100vh;
	display: flex;
	align-items: stretch;

	@media (max-width: 500px) {
		height: 100vh;
		display: flex;
		justify-content: center;
		align-items: center;
	}
`

export const Form = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: center;

	padding: 0 134px;

	background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

	> h1 {
		font: normal 700 48px/63px 'Roboto slab';
		color: ${({ theme }) => theme.COLORS.PINK_300};
	}

	> p {
		font-size: 14px;
		color: #cac4cf;
	}

	> h2 {
		font-size: 24px;
		margin: 48px 0;
	}

	> .buttons {
		margin-top: 24px;
		display: flex;
		flex-direction: column;
		gap: 42px;

		a {
			margin: 0 auto;
		}
	}

	@media (max-width: 500px) {
		padding: 0 40px;
	}
`

export const Background = styled.div`
	background: url(${backgroundImg}) no-repeat center center;
	background-size: cover;
	opacity: 0.4;
	flex: 1;
`
