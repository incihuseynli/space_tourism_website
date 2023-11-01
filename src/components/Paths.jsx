import Destination from "../pages/Destination";
import Crew from "../pages/Crew";
import Technology from "../pages/Technology";
import Home from "../pages/Home";

export const paths = [
  {
    id: 0,
    path: "/",
    element: <Home />,
    title: "home",
  },
  {
    id: 1,
    path: "/destination",
    element: <Destination />,
    title : "destination",
  },
  {
    id: 2,
    path: "/crew",
    element: <Crew />,
    title: "crew",
  },
  {
    id: 3,
    path: "/technology",
    element: <Technology />,
    title: "technology",
  },
];
