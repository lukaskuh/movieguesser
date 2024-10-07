import { createBrowserRouter } from "react-router-dom";
import App from './App';
import Home from './Home';
import Play from './Play';
import ErrorPage from "./ErrorPage";
import { movieLoader } from "./loader";

const router = createBrowserRouter([
  {
    Component: App,
    errorElement: <ErrorPage />,
    children: [
        {
            path: "play",
            Component: Play,
            loader: movieLoader,
        }, {
            index: true,
            Component: Home,
        }]
  },
]);
export default router;