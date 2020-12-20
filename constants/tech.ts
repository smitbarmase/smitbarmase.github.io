import {
  DiJavascript1,
  DiReact,
  DiRedis,
  DiNodejs,
  DiPostgresql,
  DiMongodb,
  DiUbuntu,
  DiUnitySmall,
} from "react-icons/di";

import { SiGraphql } from "react-icons/si";

export interface TechInterface {
  name: string;
  color: string;
  icon: any;
}

const tech = [
  {
    name: "JavaScript",
    color: "#f0db4f",
    icon: DiJavascript1,
  },
  {
    name: "React",
    color: "#61dbfb",
    icon: DiReact,
  },
  {
    name: "GraphQL",
    color: "#e535ab",
    icon: SiGraphql,
    size: "1.05rem",
  },
  {
    name: "Redis",
    color: "#d82c20",
    icon: DiRedis,
  },
  {
    name: "Node",
    color: "#68a063",
    icon: DiNodejs,
  },
  {
    name: "PostgreSQL",
    color: "#30648c",
    icon: DiPostgresql,
  },
  {
    name: "MongoDB",
    color: "#4db33d",
    icon: DiMongodb,
  },
  {
    name: "Ubuntu",
    color: "#dd4814",
    icon: DiUbuntu,
  },
  {
    name: "Unity",
    color: "#222c36",
    icon: DiUnitySmall,
  },
];

export default tech;
