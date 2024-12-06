import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import AboutUs from "./pages/AboutUs";
import Conditions from "./pages/Conditions";
import Home from "./pages/Home/Home.tsx";
import News from "./pages/News";
import Politique from "./pages/Politique";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "Conditions",
        element: <Conditions />,
      },
      {
        path: "Politique",
        element: <Politique />,
      },
      {
        path: "Home",
        element: <Home />,
      },
      {
        path: "AboutUs",
        element: <AboutUs />,
      },
      {
        path: "News",
        element: <News />,
      },
      {
        path: "/",
        element: <Home />,
        loader: async () => {
          const data = await fetch(
            `https://newsapi.org/v2/everything?q=inspirant&language=fr&sortBy=relevancy&pageSize=12&apiKey=${import.meta.env.VITE_APP_NEWS_API_KEY}`,
          );

          return data;
        },
      },
    ],
  },
]);

const rootElement = document.getElementById("root");
if (rootElement == null) {
  throw new Error(`Your HTML Document should contain a <div id="root"></div>`);
}

createRoot(rootElement).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
