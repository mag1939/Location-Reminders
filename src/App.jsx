import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./views/Home";
import AboutMe from "./views/AboutMe";
import Layout from "./components/Layout";

const router = createBrowserRouter(
  [{
    path: "/",
    element: <Layout />,
    errorElement: (
      <div className="min-h-screen flex justify-center items-center">
        <h1 className="text-4xl">Error 404 - FLASH BANG! 🥵🔥</h1>
      </div>
    ),
    children: [
      {path: "/", element: <Home />},
      {path: "aboutme", element: <AboutMe />},
    ],
  }]
)
export default function App() {
  return (<RouterProvider router={router} />);
}
