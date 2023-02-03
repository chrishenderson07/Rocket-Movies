import { Link } from 'react-router-dom'
import { Input } from '../Input'
import { Container } from './styles'

export function Header() {
	return (
		<Container>
			<Link to="/">
				<h1>RocketMovies</h1>
			</Link>
			<div className="search">
				<Input placeholder="Pesquisar pelo titulo" />
			</div>

			<div>
				<div className="info">
					<Link to="/profile">
						<h3>Chris Henderson</h3>
					</Link>
					<Link to="/signin">sair</Link>
				</div>
				<Link to="/profile">
					<img
						src="https://github.com/chrishenderson07.png"
						alt="Foto do usuário"
					/>
				</Link>
			</div>
		</Container>
	)
}
