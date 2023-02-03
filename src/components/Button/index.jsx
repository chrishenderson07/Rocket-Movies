import { Container } from '../Button/styles'
import { FiPlus } from 'react-icons/fi'

export function Button({ title, ...rest }) {
	return (
		<Container type="button" {...rest}>
			{/* 			<FiPlus /> */}
			{title}
		</Container>
	)
}
