import { Context, createContext } from "react";

const UserContext = createContext({
    user: {
        name: "Abhi",
        email: "abhi@gmail.com"
    }
})

export default UserContext;