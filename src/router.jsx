import { createBrowserRouter } from "react-router-dom";
import App from './App';
import Home from './Home';
import Play from './Play';
import HowToPlay from "./HowToPlay";
import ErrorPage from "./ErrorPage";
import { movieLoader } from "./loader";

const router = createBrowserRouter([
  {
    Component: App,
    errorElement: <ErrorPage />,
    children: [
        {
            path: "play/:category",
            Component: Play,
            loader: movieLoader,
        }, {
          path: "how-to-play",
          Component: HowToPlay,
        }, {
            index: true,
            Component: Home,
        }]
  },
]);
export default router;