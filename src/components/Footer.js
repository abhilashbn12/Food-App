import { useContext } from "react";
import UserContext from "../utils/UserContext";
// import { Link } from "react-router-dom";

const Footer = () => {
    const { user } = useContext(UserContext);
    return (
        <a href="http://www.linkedin.com/in/abhilashbn12" rel="LinkedIn" target="_blank">
            <h4 className="font-thin text-center">©️ This is developed by {user.name}</h4>
        </a>
    )
}

export default Footer;