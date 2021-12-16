import { Container } from "./styles";

export function TopMenu() {
  return (
    <Container>
      <div className="menu-content">
        <h2>CentraLearn</h2>
        <div className="menu-buttons">
          <button>Sou Empresa</button>
          <button>Sou Candidato</button>
        </div>
      </div>
    </Container>
  );
}
