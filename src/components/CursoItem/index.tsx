import { Container } from "./style";

type CursoItemProps = {
  img?: string;
  titulo: string;
  participantes: number;
};

export function CursoItem({ img, titulo, participantes }: CursoItemProps) {
  return (
    <Container>
      {img ? (
        <img src={img} alt={titulo} />
      ) : (
        <img src="/question.png" alt="sem imagem" />
      )}
      <h4>{titulo}</h4>
      <p>{participantes} participantes</p>
    </Container>
  );
}
