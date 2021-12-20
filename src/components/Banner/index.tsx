import { Container } from "./styles";

type HeaderContent = {
  text: string;
};

type BannerProps = {
  data: {
    header1: Array<HeaderContent>;
    header2: Array<HeaderContent>;
  };
};

export function Banner({ data }: BannerProps) {
  return (
    <Container>
      <div className="banner-content">
        <h1>{data.header1[0].text}</h1>
        <h2>{data.header2[0].text}</h2>
      </div>
    </Container>
  );
}
