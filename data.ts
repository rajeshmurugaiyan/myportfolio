import { RiComputerLine } from "react-icons/ri";
import { FaServer } from "react-icons/fa";
import { AiFillBug, AiOutlineApi } from "react-icons/ai";
import { DiGoogleAnalytics } from "react-icons/di"
import { Service, Skill } from "./types";

import { BsCircleFill } from "react-icons/bs";

export const services: Service[] = [
  {
    Icon: RiComputerLine,
    title: "Frontend Development",
    about:
      "Have developed some many pages in Wordpress, Vue.js and Reat.js",
  },
  {
    Icon: FaServer,
    title: "Backend  Development",
    about:
      "handled database, server, api using Redbean, mysql server, Phalcon and Laravel",
  },
  {
    Icon: AiOutlineApi,
    title: "API Development",
    about:
      "I can develop robust REST API ",
  },
  {
    Icon: AiFillBug,
    title: "Testing",
    about:
      "I have done unit, acceptance and functional testing in codeception and PHPUnit",
  },
  {
    Icon: DiGoogleAnalytics,
    title: "Analytics",
    about:
      "I have worked on Google Analytics, DataStudio and TagManager",
  }
];

export const languages: Skill[] = [
  {
    Icon: BsCircleFill,
    name: "Php",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "Java Script",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "Vue",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "Wordpress",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "Phalcon",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "Bootstrap",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "Codeception",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "PHPUnit",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "React",
    level: "50",
  },
  {
    Icon: BsCircleFill,
    name: "Firebase",
    level: "50",
  },
];

export const tools: Skill[] = [
  {
    Icon: BsCircleFill,
    name: "Git",
    level: "85",
  },
  {
    Icon: BsCircleFill,
    name: "SourceTree",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "Visualstuido code & Eclipse",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "MySQL",
    level: "85",
  },
  {
    Icon: BsCircleFill,
    name: "Google Analytics & Tag Manager",
    level: "85",
  },
  {
    Icon: BsCircleFill,
    name: "Optimonk",
    level: "85",
  },
  {
    Icon: BsCircleFill,
    name: "Awin",
    level: "85",
  },
  {
    Icon: BsCircleFill,
    name: "",
    level: "85",
  },
];
