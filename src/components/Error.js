import { useRouteError } from "react-router-dom";

const Error = () => {
    const err = useRouteError();
    // console.log(err);
    return (
        <div>
            <h1>Opps!</h1>
            <h2>Somthing went wrong!</h2>
            <p>{err.status + " : " + err.statusText}</p>
        </div>
    )
}
export default Error;