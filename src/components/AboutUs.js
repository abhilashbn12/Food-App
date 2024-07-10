import { useEffect, useState } from "react";

const AboutUs = () => {
    const [userData, setUserData] = useState("");
    const { name, avatar_url, email, location } = userData;
    useEffect(() => {
        getGithubData();
    }, [])

    async function getGithubData() {
        const data = await fetch("https://api.github.com/users/abhilashbn12");
        const jsonData = await data.json();
        setUserData(jsonData);
    }
    return (
        <div className="p-2 border-gray-900 border-solid border m-2">
            <h1 className="text-xl font-medium p-2">About Me</h1>
            <img className="h-52 p-2" src={avatar_url} />
            <h1 className="text-2xl font-bold p-2">Name: {name}</h1>
            <h2 className="p-2 font-medium">Email: <span className="font-normal">{email || "bnabhilash2001@gmail.com"}</span></h2>
            <h2 className="p-2 font-medium">Location: {location}</h2>
        </div>
    )
}

export default AboutUs;