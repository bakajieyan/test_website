import {
  FiHome,
  FiBook,
  FiInfo
} from "react-icons/fi";
import { CgToolbox } from "react-icons/cg";
export default [
  {
    path: 'home',
    label: 'Home',
    icon: <FiHome/>
  },
  {
    path: 'home2',
    label: 'Tools',
    icon: <CgToolbox/>
  },
  {
    path: 'roadmap',
    label: 'Roadmap',
    icon: <FiBook/>
  },
  {
    path: 'team',
    label: 'Team',
    icon: <FiInfo/>
  },
];
