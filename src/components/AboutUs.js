import { Outlet } from "react-router-dom";
import Profile from "./Profile";
import ProfileClass from "./ProfileClass";

const AboutUs = () => {
    return (
        <div>
            <h1>About Us Page</h1>
            <p>This is an about us page of Foodie</p>
            {/* <Outlet /> */}
            <Profile name={"Abhi"} id={1} />
            <ProfileClass name={"Abhilash"} id={2} />
        </div>
    )
}

export default AboutUs;