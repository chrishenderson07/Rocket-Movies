import { useAuth } from "../../hooks/auth";

import { api } from "../../services/api";
import avatarPlaceholder from "../../assets/avatar-placeholder.svg";

import { useNavigate } from "react-router-dom";
import { Input } from "../Input";
import { Container } from "./styles";

export function Header({ onChange, isSearch }) {
  const { signOut, user } = useAuth();

  const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceholder;

  const navigate = useNavigate();
  function handlePageNavigate(locale) {
    navigate(locale);
  }

  function handleSignOut() {
    navigate("/");
    signOut();
  }

  return (
    <Container>
      <h1
        onClick={() => {
          handlePageNavigate("/");
        }}
      >
        RocketMovies
      </h1>

      {isSearch ? (
        <div className="search">
          <Input
            placeholder="Pesquisar pelo titulo"
            onChange={onChange}
          />
        </div>
      ) : (
        <></>
      )}

      <div>
        <div className="info">
          <h3
            onClick={() => {
              handlePageNavigate("/profile");
            }}
          >
            {user.name}
          </h3>
          <button onClick={handleSignOut}>sair</button>
        </div>
        <img
          src={avatarUrl}
          alt={`Foto do usuario ${user.name}`}
          onClick={() => {
            handlePageNavigate("/profile");
          }}
        />
      </div>
    </Container>
  );
}
