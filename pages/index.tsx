import Head from "next/head";

import algorithmsCards from "../constants/algorithms";
import gamesCards from "../constants/games";
import webAppsCards from "../constants/web-apps";

import Card from "../components/Card";
import Profile from "../components/Profile";

const Home = () => {
  const tech = [
    "React",
    "NextJS",
    "GraphQL",
    "Apollo Client",
    "TypeScript",
    "Redis",
    "PostgreSQL",
    "NodeJS",
    "SSR and SSG",
    "Web Sockets",
  ];

  return (
    <>
      <Head>
        <title>Smit Barmase | Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="h-screen bg-blueGray-100 overflow-y-scroll">
        <div className="mx-auto max-w-7xl px-4 xl:px-8 pb-14">
          <div className="flex flex-col py-10 space-y-4 lg:space-x-8 lg:flex-row">
            <Profile />
            <div className="border-l border-blueGray-300" />
            <div className="lg:max-w-lg">
              <div className="text-lg font-medium py-1 mb-1">
                Technologies I have worked with
              </div>
              <ul className="flex flex-wrap gap-2">
                {tech.map((ele, idx) => (
                  <li
                    key={idx}
                    className="inline-block text-xs bg-blueGray-200 rounded py-1.5 px-4 cursor-default hover:bg-blueGray-300"
                  >
                    {`#${ele}`}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div>
            <h1 className="font-medium py-5">Web Apps</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 xl:gap-4 px-1">
              {webAppsCards.map((card, idx) => (
                <Card key={idx} {...card} />
              ))}
            </div>
          </div>
          <div>
            <h1 className="font-medium py-5">Algorithmic Projects</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 xl:gap-4 px-1 ">
              {algorithmsCards.map((card, idx) => (
                <Card key={idx} {...card} />
              ))}
            </div>
          </div>
          <div>
            <h1 className="font-medium py-5">Game Projects - Twelfish</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 xl:gap-4 px-1">
              {gamesCards.map((card, idx) => (
                <Card key={idx} {...card} isPlayStore />
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
