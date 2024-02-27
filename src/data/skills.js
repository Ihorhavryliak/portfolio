import { IoLogoReact } from "react-icons/io5";
import { SiRedux, SiTypescript } from "react-icons/si";
import { CiServer } from "react-icons/ci";
import { DiJavascript1 } from "react-icons/di";
import { AiOutlineHtml5 } from "react-icons/ai";
import { TbBrandBootstrap, TbBrandSass } from "react-icons/tb";
import { FiGithub } from "react-icons/fi";
import { FaDatabase, FaNodeJs, FaWpforms } from "react-icons/fa";
import {
  BsBoxArrowInRight,
  BsClipboardCheck,
  BsCloudUpload,
} from "react-icons/bs";
import { SiNextdotjs } from "react-icons/si";

export const skills = [
  {
    name: "React",
    description: ` Used React library for developing UI of SPA. Experienced in creating
  functional components with Hooks as well as class components. Used
  HOC to reuse component logic and optimize performance with
  React.memo.`,
    icon: <IoLogoReact className="block__icon" />,
  },

  {
    name: "Redux",
    description: `    Implemented Redux for state management of the app as BLL. Created
  reducers for immutable state modification, and used Thunk middleware
  for asynchronous network requests.`,
    icon: <SiRedux className="block__icon" />,
  },
  {
    name: "JavaScript",
    description: `    Experienced in using ES6 features, such as Promises, Classes,
  Destructuring assignment, Arrow functions etc.`,
    icon: <DiJavascript1 className="block__icon" />,
  },
  {
    name: "TypeScript",
    description: `    Used TypeScript for developing easily scalable and sustainable
  application.`,
    icon: <SiTypescript className="block__icon" />,
  },
  {
    name: "Rest API / Swagger",
    description: `   Developed data access layer (DAL) for interaction with RESTful web
  services by using Axios library.`,
    icon: <CiServer className="block__icon" />,
  },
  {
    name: "HTML & CSS",
    description: `Created styles for UI components by using Styled Components.`,
    icon: <AiOutlineHtml5 className="block__icon" />,
  },
  {
    name: "SASS",
    description: `Created styles for UI components by using Sass preprocessor.`,
    icon: <TbBrandSass className="block__icon" />,
  },
  {
    name: "Bootstrap",
    description: `I was using Bootstrap for app development with styles and design out of a
  box.`,
    icon: <TbBrandBootstrap className="block__icon" />,
  },
  {
    name: "Git",
    description: `I was using Git to control program version.`,
    icon: <FiGithub className="block__icon" />,
  },
  {
    name: "Formik",
    description: `I was using Formik for created different forms.`,
    icon: <FaWpforms className="block__icon" />,
  },
  {
    name: "Node.js / Express / Nest.js",
    description: `I was creating  servers.`,
    icon: <FaNodeJs className="block__icon" />,
  },
  {
    name: "MongoDB / SQL / PostgreSQL",
    description: `I was creating databases.`,
    icon: <FaDatabase className="block__icon" />,
  },
  {
    name: "Google OAuth 2.0",
    description: `I was doing Auth with Google API.`,
    icon: <BsBoxArrowInRight className="block__icon" />,
  },
  {
    name: "Next.js",
    description: `Next.js`,
    icon: <SiNextdotjs className="block__icon" />,
  },
  {
    name: "MUI",
    description: `MUI`,
    icon: <BsClipboardCheck className="block__icon" />,
  },
  {
    name: "Taiwing",
    description: `Taiwing`,
    icon: <BsCloudUpload className="block__icon" />,
  },
];
