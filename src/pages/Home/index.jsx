import { useState, useEffect } from "react";

import { api } from "../../services/api";

import { useNavigate } from "react-router-dom";

import { Container } from "./styles";

import { Header } from "../../components/Header";
import { Section } from "../../components/Section";

import { Button } from "../../components/Button";
import { CardMovie } from "../../components/CardMovie";

export function Home() {
  const [notes, setNotes] = useState([]);
  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  function handleDetails(id) {
    navigate(`/details/${id}`);
  }

  function handlePageNavigate(locale) {
    navigate(locale);
  }

  useEffect(() => {
    async function fetchNotes() {
      const response = await api.get(`/notes?title=${search}`);
      setNotes(response.data);
    }
    fetchNotes();
  }, [search]);

  return (
    <Container>
      <Header
        isSearch
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="titleLine">
        <Section title={"Meus Filmes"}></Section>
        <Button
          title={"Adicionar filme"}
          onClick={() => {
            handlePageNavigate("/new");
          }}
        />
      </div>

      <main>
        {notes.map((note) => (
          <CardMovie
            key={String(note.id)}
            data={note}
            onClick={() => {
              handleDetails(note.id);
            }}
          ></CardMovie>
        ))}
      </main>
    </Container>
  );
}
