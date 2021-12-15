import { CursoItem } from "../CursoItem";

const cursosTeste = [
  {
    participantes: 100,
    titulo: "React",
    empresa: "Empresa A",
  },
  {
    participantes: 100,
    titulo: "NodeJS",
    empresa: "Empresa B",
  },
];

export function CursosRecentes() {
  return (
    <div>
      <h3>Cursos recentes oferecidos pela CentraLearn</h3>
      {cursosTeste.map((curso, i) => (
        <div key={i}>
          <CursoItem
            empresa={curso.empresa}
            participantes={curso.participantes}
            titulo={curso.titulo}
          />
        </div>
      ))}
    </div>
  );
}
