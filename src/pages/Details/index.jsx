import { useAuth } from "../../hooks/auth";
import { useState, useEffect } from "react";
import { api } from "../../services/api";
import { useNavigate, useParams } from "react-router-dom";

import avatarPlaceholder from "../../assets/avatar-placeholder.svg";

import { Container, MovieTitle, Content } from "./styles";
import { FiArrowLeft, FiStar, FiClock } from "react-icons/fi";

import { Rating } from "../../components/Rating";
import { Header } from "../../components/Header";
import { ButtonText } from "../../components/ButtonText";
import { Tag } from "../../components/Tag";

export function Details() {
  const { user } = useAuth();

  const [data, setData] = useState({});
  const [newDate, setNewDate] = useState("");

  const navigate = useNavigate();
  const params = useParams();
  function handleBack() {
    navigate(-1);
  }

  const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceholder;

  useEffect(() => {
    async function fetchNotes() {
      const response = await api.get(`/notes/${params.id}`);
      setData(response.data);
    }

    async function fetchDate() {
      const dateResponse = await api.get(`/notes/${params.id}`);
      const { created_at } = dateResponse.data;
      const finalDate = new Date(created_at).toLocaleDateString();
      setNewDate(finalDate);
    }

    fetchNotes();
    fetchDate();
  }, []);

  return (
    <Container>
      <Header />
      <main>
        <div className="wrapper">
          <ButtonText
            title="Voltar"
            icon={FiArrowLeft}
            onClick={handleBack}
          />

          <MovieTitle>
            <div className="titleRating">
              <h1>{data.title}</h1>
              <Rating data={data} />
            </div>
            <div className="autorLine">
              <div className="autor">
                <img
                  src={avatarUrl}
                  alt={`Foto do usuário ${user.name}`}
                />
                <p>Por {user.name}</p>
              </div>
              <div className="time">
                <FiClock />
                <p>{newDate}</p>
              </div>
            </div>

            <div className="tagsLine">
              {data.tags &&
                data.tags.map((tag) => (
                  <Tag
                    key={String(tag.id)}
                    title={tag.name}
                  />
                ))}
            </div>
          </MovieTitle>

          <Content>
            <p>
              Pragas nas colheitas fizeram a civilização humana regredir para
              uma sociedade agrária em futuro de data desconhecida. Cooper,
              ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a
              filha de dez anos de Cooper, acredita que seu quarto está
              assombrado por um fantasma que tenta se comunicar com ela. Pai e
              filha descobrem que o "fantasma" é uma inteligência desconhecida
              que está enviando mensagens codificadas através de radiação
              gravitacional, deixando coordenadas em binário que os levam até
              uma instalação secreta da NASA liderada pelo professor John Brand.
              O cientista revela que um buraco de minhoca foi aberto perto de
              Saturno e que ele leva a planetas que podem oferecer condições de
              sobrevivência para a espécie humana. As "missões Lázaro" enviadas
              anos antes identificaram três planetas potencialmente habitáveis
              orbitando o buraco negro Gargântua: Miller, Edmunds e Mann –
              nomeados em homenagem aos astronautas que os pesquisaram. Brand
              recruta Cooper para pilotar a nave espacial Endurance e recuperar
              os dados dos astronautas; se um dos planetas se mostrar habitável,
              a humanidade irá seguir para ele na instalação da NASA, que é na
              realidade uma enorme estação espacial. A partida de Cooper devasta
              Murphy.
            </p>
            <p>
              Além de Cooper, a tripulação da Endurance é formada pela bióloga
              Amelia, filha de Brand; o cientista Romilly, o físico planetário
              Doyle, além dos robôs TARS e CASE. Eles entram no buraco de
              minhoca e se dirigem a Miller, porém descobrem que o planeta
              possui enorme dilatação gravitacional temporal por estar tão perto
              de Gargântua: cada hora na superfície equivale a sete anos na
              Terra. Eles entram em Miller e descobrem que é inóspito já que é
              coberto por um oceano raso e agitado por ondas enormes. Uma onda
              atinge a tripulação enquanto Amelia tenta recuperar os dados de
              Miller, matando Doyle e atrasando a partida. Ao voltarem para a
              Endurance, Cooper e Amelia descobrem que 23 anos se passaram.
            </p>
          </Content>
        </div>
      </main>
    </Container>
  );
}
