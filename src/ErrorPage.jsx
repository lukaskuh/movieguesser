import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();
    
    return (
      <div id="error-page">
        <h1>Oops!</h1>
        <p>{error?.statusText || error?.message}</p>
      </div>
    );
}