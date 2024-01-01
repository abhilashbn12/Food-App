import { useContext } from "react";
import UserContext from "../utils/UserContext";

const Footer = () => {
    const { user } = useContext(UserContext);
    return (
        <h4 className="font-thin text-center">©️ This is developed by {user.name}</h4>
    )
}

export default Footer;