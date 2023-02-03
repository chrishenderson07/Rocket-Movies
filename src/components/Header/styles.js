import styled from 'styled-components'

export const Container = styled.div`
	width: 100%;
	height: 116px;
	padding: 24px 124px;
	border-bottom: 1px solid ${({ theme }) => theme.COLORS.GRAY_200};

	background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 64px;

	.search {
		width: 60%;
	}

	h1 {
		font-size: 24px;
		font-weight: 700;
		color: ${({ theme }) => theme.COLORS.PINK_300};
	}

	> div {
		display: flex;
		text-align: right;
		align-items: center;
		gap: 9px;

		a {
			font-size: 14px;
		}

		h3 {
			font-size: 14px;
			font-weight: 700;
			color: ${({ theme }) => theme.COLORS.GRAY_100};
		}

		img {
			width: 64px;
			height: 64px;
			border: 2px solid ${({ theme }) => theme.COLORS.GRAY_200};
			border-radius: 50%;
		}
	}

	@media (max-width: 768px) {
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
		padding: 16px 30px;
		height: 200px;
		gap: 12px;

		h1 {
			order: 1;
		}
	}
`
