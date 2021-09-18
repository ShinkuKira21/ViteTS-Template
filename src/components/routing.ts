import Home from "../views/home";
import Second from "../views/second";
import NavBar from "./navbar";

const NavBarLayout = (active) => {
    let pages = ["/", "second"]; let names = ["Home", "Info"];
    
    return (new NavBar(active, pages, names).NavBar())
}

const Routing = () => {
    let navbar = NavBarLayout(window.location.pathname);

    let router = `${navbar} <div id = 'routes'>`;

    if(window.location.pathname === "/")
        router += Home();

    if(window.location.pathname === "/second")
        router += Second();

    router += "</div>";

    return (router);
}

export default Routing;