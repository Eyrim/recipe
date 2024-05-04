import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error: any = useRouteError();
    console.error(error);

    return (
        <div id="error-page">
            <h1>oh fuck</h1>
            <p>my website... its broken :(</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    )
}