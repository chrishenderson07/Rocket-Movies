import { Link } from 'react-router-dom'

import { Container, Form, Background } from './styles'
import { FiMail, FiLock, FiArrowLeft } from 'react-icons/fi'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { ButtonText } from '../../components/ButtonText'

export function SignIn() {
	return (
		<Container>
			<Form>
				<h1>RocketMovies</h1>
				<p>Aplicação para acompanhar tudo que assistir.</p>

				<h2>Faça seu login</h2>

				<Input type="text" placeholder="E-mail" icon={FiMail} />

				<Input type="text" placeholder="Senha" icon={FiLock} />

				<div className="buttons">
					<Button title="Entrar" />
					<Link to="/register">
						<ButtonText title="Criar Conta" />
					</Link>
				</div>
			</Form>

			<Background />
		</Container>
	)
}
