import styled from 'styled-components'

export const Container = styled.div`
	width: 100%;
	overflow-y: hidden;

	> .titleLine {
		display: grid;
		grid-template-rows: 1fr auto;
		grid-template-columns: 1fr auto;

		align-items: center;

		padding: 0 124px;
	}

	> main {
		overflow-y: auto;
		position: relative;

		width: 85%;
		height: 60vh;
		margin: 0 auto;
		padding-right: 8px;

		display: flex;
		flex-direction: column;
		gap: 24px;

		&::-webkit-scrollbar {
			width: 8px;
		}

		&::-webkit-scrollbar-thumb {
			background-color: ${({ theme }) => theme.COLORS.PINK_300};
			border-radius: 9999px;
		}
	}

	@media (max-width: 600px) {
		.titleLine {
			padding: 0 40px;
		}
	}
`
