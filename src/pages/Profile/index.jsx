import { Link } from 'react-router-dom'
import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from 'react-icons/fi'
import { Container, Form, Avatar } from './styles'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { ButtonText } from '../../components/ButtonText'

export function Profile() {
	return (
		<Container>
			<header>
				<Link to="/">
					<ButtonText title="Voltar" icon={FiArrowLeft} />
				</Link>
			</header>

			<Form>
				<Avatar>
					<img
						src="https://github.com/chrishenderson07.png"
						alt="Foto do usuário"
					/>

					<label htmlFor="avatar">
						<FiCamera />
						<input type="file" id="avatar" />
					</label>
				</Avatar>

				<Input placeholder="Nome" type="text" icon={FiUser} />

				<Input placeholder="Email" type="mail" icon={FiMail} />

				<Input placeholder="Senha Atual" type="password" icon={FiLock} />

				<Input placeholder="Senha Antiga" type="password" icon={FiLock} />

				<Button title="Salvar" />
			</Form>
		</Container>
	)
}
