import { Container } from "./styles";

export function TopMenu() {
  return (
    <Container>
      <div className="menu-content">
        <img src="/centraLearn-transparent.png" alt="centralearn logo" />
        <div className="menu-buttons">
          <button>Sou Empresa</button>
          <button>Sou Candidato</button>
        </div>
      </div>
    </Container>
  );
}
