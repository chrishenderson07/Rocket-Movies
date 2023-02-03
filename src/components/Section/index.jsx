import { Container } from './styles'

export function Section({ title, childreen, ...rest }) {
	return (
		<Container>
			<h2> {title}</h2>
			{childreen}
		</Container>
	)
}
