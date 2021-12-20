import Image from "next/image";
import Prismic from "prismic-javascript";
import { Banner } from "../components/Banner";
import { CandidatoEmpresa } from "../components/CandidatoEmpresa";
import { CursosRecentes } from "../components/CursosRecentes";
import { TopMenu } from "../components/TopMenu";

export default function Home({
  topbanner,
  candidateCompany,
  companies,
  recentCourses,
}) {
  return (
    <div>
      <TopMenu />
      <main>
        <Banner data={topbanner.data} />
        <CandidatoEmpresa data={candidateCompany.data} />
        <CursosRecentes recentCourses={recentCourses} />
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
        <p>Developed by Guilherme Araújo</p>
      </footer>
    </div>
  );
}

export async function getStaticProps() {
  const client = Prismic.client(
    "https://desafioreact-rocket2021.prismic.io/api/v2"
  );
  const topbanner = await client.query(
    Prismic.Predicates.at("document.type", "topbanner")
  );
  const candidateCompany = await client.query(
    Prismic.Predicates.at("document.type", "candidate-company")
  );
  const companies = await client.query(
    Prismic.Predicates.at("document.type", "companies")
  );
  const recentCourses = await client.query(
    Prismic.Predicates.at("document.type", "recentcourses")
  );
  return {
    props: {
      topbanner: topbanner.results[0],
      candidateCompany: candidateCompany.results[0],
      companies: companies.results,
      recentCourses: recentCourses.results,
    },
  };
}
