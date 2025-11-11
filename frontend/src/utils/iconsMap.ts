import { TbBrandNextjs } from "react-icons/tb";
import { PiFramerLogoFill } from "react-icons/pi";
import { FaGitAlt } from "react-icons/fa";
import { BiLogoPostgresql, BiLogoTypescript } from "react-icons/bi";
import { FcLinux } from "react-icons/fc";
import { LuWorkflow } from "react-icons/lu";
import { DiScrum } from "react-icons/di";
import { VscAzureDevops } from "react-icons/vsc";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaPython,
  FaAws,
  FaDocker,
  FaFigma,
  FaCode,
} from "react-icons/fa6";
import {
  SiStyledcomponents,
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiMysql,
  SiTerraform,
  SiGithubactions,
  SiGraphql,
  SiRedis,
  SiJira,
  SiJavascript,
  SiKubernetes,
  SiPandas,
  SiNumpy,
  SiGnubash,
} from "react-icons/si";

const iconsMap = {
  react: FaReact,
  typescript: BiLogoTypescript,
  javascript: SiJavascript,
  css: FaCss3Alt,
  tailwind: SiTailwindcss,
  "next.js": TbBrandNextjs,
  "node.js": FaNodeJs,
  express: SiExpress,
  mongodb: SiMongodb,
  aws: FaAws,
  docker: FaDocker,
  kubernetes: SiKubernetes,
  terraform: SiTerraform,
  "ci/cd": LuWorkflow,
  linux: FcLinux,
  "github actions": SiGithubactions,
  postgresql: BiLogoPostgresql,
  graphql: SiGraphql,
  redis: SiRedis,
  scrum: DiScrum,
  jira: SiJira,
  devops: VscAzureDevops,
  html: FaHtml5,
  figma: FaFigma,
  python: FaPython,
  pandas: SiPandas,
  numpy: SiNumpy,
  sql: SiMysql,
  git: FaGitAlt,
  "styled components": SiStyledcomponents,
  "framer motion": PiFramerLogoFill,
  bash: SiGnubash,
  default: FaCode,
};

export default iconsMap;
