type CursoItemProps = {
  img?: string;
  titulo: string;
  participantes: number;
  empresa: string;
};

export function CursoItem({
  img,
  titulo,
  participantes,
  empresa,
}: CursoItemProps) {
  return (
    <div>
      {img ? (
        <img src={img} alt={titulo} />
      ) : (
        <img src="/question.png" alt="sem imagem" />
      )}
      <h4>{titulo}</h4>
      <p>{participantes} participantes</p>
      <h4>{empresa}</h4>
    </div>
  );
}
