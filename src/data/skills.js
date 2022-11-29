import { IoLogoReact } from "react-icons/io5";
import { SiRedux, SiTypescript } from "react-icons/si";
import { CiServer } from "react-icons/ci";
import { DiJavascript1 } from "react-icons/di";
import { AiOutlineHtml5 } from "react-icons/ai";
import { TbBrandBootstrap, TbBrandSass } from "react-icons/tb";
import { FiGithub } from "react-icons/fi";
import { FaWpforms } from "react-icons/fa";


export const skills = [{
  name: 'React',
  description: ` Used React library for developing UI of SPA. Experienced in creating
  functional components with Hooks as well as class components. Used
  HOC to reuse component logic and optimize performance with
  React.memo.`,
  icon: <IoLogoReact className="block__icon" />,
},
{
  name: 'Redux',
  description: `    Implemented Redux for state management of the app as BLL. Created
  reducers for immutable state modification, and used Thunk middleware
  for asynchronous network requests.`,
  icon: <SiRedux className="block__icon" />,
},
{
  name: 'JavaScript',
  description: `    Experienced in using ES6 features, such as Promises, Classes,
  Destructuring assignment, Arrow functions etc.`,
  icon: <DiJavascript1 className="block__icon" />,
},
{
  name: 'TypeScript',
  description: `    Used TypeScript for developing easily scalable and sustainable
  application.`,
  icon:    <SiTypescript className="block__icon" />,
},
{
  name: 'Rest API',
  description: `   Developed data access layer (DAL) for interaction with RESTful web
  services by using Axios library.`,
  icon:     <CiServer className="block__icon" />,
},
{
  name: 'HTML & CSS',
  description: `Created styles for UI components by using Styled Components.`,
  icon:     <AiOutlineHtml5 className="block__icon" />,
},
{
  name: 'SASS',
  description: `Created styles for UI components by using Sass preprocessor.`,
  icon:    <TbBrandSass className="block__icon" />,
},
{
  name: 'Bootstrap',
  description: `Used Bootstrap for app development with styles and design out of a
  box.`,
  icon:    <TbBrandBootstrap className="block__icon" />,
},
{
  name: 'Git',
  description: `Used Git to control program version.`,
  icon:  <FiGithub className="block__icon" />,
},
{
  name: 'Formik',
  description: `Used Formik for created different forms.`,
  icon:  <FaWpforms className="block__icon" />,
},
]