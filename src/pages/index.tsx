import Image from "next/image";
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
