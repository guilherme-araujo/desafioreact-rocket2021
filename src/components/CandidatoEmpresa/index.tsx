import { Container } from "./styles";

type HeaderContent = {
  text: string;
};

type CandidatoEmpresaProps = {
  data: {
    candidatetitle: Array<HeaderContent>;
    candidateimage: {
      url: string;
    };
    candidatetext: Array<HeaderContent>;
    candidatebutton: Array<HeaderContent>;
    companytitle: Array<HeaderContent>;
    companyimage: {
      url: string;
    };
    companytext: Array<HeaderContent>;
    companybutton: Array<HeaderContent>;
  };
};

export function CandidatoEmpresa({ data }: CandidatoEmpresaProps) {
  return (
    <Container>
      <div className="candidatoDiv">
        <div className="candLeft">
          <h3>{data.candidatetitle[0].text}</h3>
          <img src={data.candidateimage.url} alt="candidato" />
        </div>
        <div className="candRight">
          <p>{data.candidatetext[0].text}</p>
          <button>{data.candidatebutton[0].text}</button>
        </div>
      </div>
      <div className="empresaDiv">
        <div className="empresaLeft">
          <p>{data.companytext[0].text}</p>
          <button>{data.companybutton[0].text}</button>
        </div>
        <div className="empresaRight">
          <h3>{data.companytitle[0].text}</h3>
          <img src={data.companyimage.url} alt="candidato" />
        </div>
      </div>
    </Container>
  );
}
