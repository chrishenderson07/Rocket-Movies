import { Tag } from '../Tag'
import { Container } from '../CardMovie/styles'
import { FiStar } from 'react-icons/fi'

export function CardMovie({ value, title, ...rest }) {
	return (
		<Container {...rest}>
			<h2>{title}</h2>

			<div className="rating">
				<FiStar />
				<FiStar />
				<FiStar />
				<FiStar />
				<FiStar />
			</div>
			<p>{value.length <= 285 ? value : value.substr(0, 286) + '...'}</p>

			<div className="tags">
				<Tag title={'Ficção'} />
				<Tag title={'Suspense'} />
			</div>
		</Container>
	)
}
