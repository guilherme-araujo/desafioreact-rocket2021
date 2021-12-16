import Image from "next/image";
import { GetStaticProps } from "next";
import Client from "../services/prismic";
import Prismic from "@prismicio/client";
import { Banner } from "../components/Banner";
import { CandidatoEmpresa } from "../components/CandidatoEmpresa";
import { CursosRecentes } from "../components/CursosRecentes";
import { TopMenu } from "../components/TopMenu";

export default function Home() {
  return (
    <div>
      <TopMenu />
      <main>
        <Banner />
        <CandidatoEmpresa />
        <CursosRecentes />
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = Client();

  /*const response = await prismic.query([
    Prismic.predicates.at("document.type", "topbanner"),
  ]);*/
  console.log("oi");
  const response = await prismic.query("");

  console.log(response);

  return {
    props: { response },
  };
};
