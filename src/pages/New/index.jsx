import { api } from "../../services/api";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Container, Content, Form, Footer } from "./styles";
import { FiArrowLeft } from "react-icons/fi";

import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";
import { Input } from "../../components/Input";
import { TextArea } from "../../components/TextArea";
import { Section } from "../../components/Section";
import { MovieItem } from "../../components/MovieItem";

export function New() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [rating, setRating] = useState("");

  const [tags, setTags] = useState([]);
  const [newTags, setNewTags] = useState("");

  const navigate = useNavigate();

  function handleBack() {
    navigate(-1);
  }

  function handleAddTag() {
    setTags((prevState) => [...prevState, newTags]);
    setNewTags("");
  }

  function handleRemoveTag(deleted) {
    setTags((prevState) => prevState.filter((tag) => tag !== deleted));
  }
  async function handleNewNote() {
    if (tags.length < 2) {
      return alert("Insira pelo menos duas categorias");
    }

    if (!title || !description || !rating) {
      return alert("Preencha todos os campos");
    }
    await api.post("/notes", { title, description, rating, tags });
    alert("Nota Criada com Sucesso");
    handleBack();
  }

  return (
    <Container>
      <Header />
      <Content>
        <ButtonText
          title="Voltar"
          icon={FiArrowLeft}
          onClick={handleBack}
        />
        <h2>Novo Filme</h2>

        <Form>
          <Input
            placeholder="Titulo"
            onChange={(e) => setTitle(e.target.value)}
          />
          <Input
            placeholder="Sua nota (de 0 a 5)"
            type="number"
            max="5"
            min="0"
            onChange={(e) => setRating(e.target.value)}
          />

          <TextArea
            placeholder="Observações"
            onChange={(e) => setDescription(e.target.value)}
          />

          <div className="tagsSection">
            <Section title="Categoria" />

            <div className="tags">
              <MovieItem
                placeholder="Nova Categoria"
                isNew
                onChange={(e) => setNewTags(e.target.value)}
                value={newTags}
                onClick={handleAddTag}
              />

              {tags.map((tag, index) => (
                <MovieItem
                  key={String(index)}
                  value={tag}
                  onClick={() => {
                    handleRemoveTag(tag);
                  }}
                />
              ))}
            </div>
          </div>

          <Footer>
            <Button
              title="Excluir Filme"
              id="exclude"
              onClick={handleBack}
            />
            <Button
              title="Salvar Alterações"
              id="save"
              onClick={handleNewNote}
            />
          </Footer>
        </Form>
      </Content>
    </Container>
  );
}
