import Services from "./containers/Services/Services";
import About from "./containers/About/About";
import Home from "./containers/Home/Home";
import Portfolio from "./containers/Portfolio/Portfolio";
import Contact from "./containers/Contact/Contact";


const routes = [
  {
    path: "/home",
    name: "Home",
    icon: "",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    icon: "",
    component: About
  },
  {
    path: "/portfolio",
    name: "Portfolio",
    icon: "",
    component: Portfolio
  },
  // {
  //   path: "/services",
  //   name: "Services",
  //   icon: "",
  //   component: Services
  // },
  {
    path: "/contact",
    name: "Contact",
    icon: "",
    component: Contact
  }
];

export default routes;