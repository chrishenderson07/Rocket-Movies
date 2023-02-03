import { Link } from 'react-router-dom'
import { Container, Content, Form, Footer } from './styles'
import { FiArrowLeft, FiX, FiPlus } from 'react-icons/fi'

import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { ButtonText } from '../../components/ButtonText'
import { Input } from '../../components/Input'
import { TextArea } from '../../components/TextArea'
import { Section } from '../../components/Section'
import { MovieItem } from '../../components/MovieItem'

export function New() {
	return (
		<Container>
			<Header />
			<Content>
				<Link to="/">
					<ButtonText title="Voltar" icon={FiArrowLeft} />
				</Link>
				<h2>Novo Filme</h2>

				<Form>
					<Input placeholder="Titulo" />
					<Input placeholder="Sua nota (de 0 a 5)" />

					<TextArea placeholder="Observações" />

					<div className="tagsSection">
						<Section title="Marcadores" />
						<div className="tags">
							<MovieItem value="Interestelar" isNew={false} />
							<MovieItem placeholder="Novo Marcador" isNew />
						</div>
					</div>

					<Footer>
						<Button title="Excluir Filme" id="exclude" />
						<Button title="Salvar Alterações" id="save" />
					</Footer>
				</Form>
			</Content>
		</Container>
	)
}
