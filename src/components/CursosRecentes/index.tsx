import { CursoItem } from "../CursoItem";
import { Container } from "./style";

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

type HeaderContent = {
  text: string;
};

type CourseItem = {
  data: {
    coursename: Array<HeaderContent>;
    image: {
      url: string;
    };
    enrolledcandidates: number;
    company: Array<HeaderContent>;
  };
};

type CursosRecentesProps = {
  recentCourses: Array<CourseItem>;
};

export function CursosRecentes({ recentCourses }: CursosRecentesProps) {
  console.log(recentCourses[0]);
  return (
    <Container>
      <h3>Cursos recentes oferecidos pela CentraLearn</h3>
      <div className="courseList">
        {recentCourses.map((curso, i) => (
          <div key={i}>
            <CursoItem
              participantes={curso.data.enrolledcandidates}
              img={curso.data.image.url}
              titulo={curso.data.coursename[0].text}
            />
          </div>
        ))}
      </div>
    </Container>
  );
}
