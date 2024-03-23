import { createBrowserRouter } from "react-router-dom";
import Layout from "@/layout/Layout";
import Search from "@/pages/search/Search";
import About from "@/pages/about/AboutUs";

const appRouter = createBrowserRouter([
  {
    path: "/What-To-Boycott/",
    element: (
      <Layout>
        <Search />
      </Layout>
    ),
  },
  {
    path: "/What-To-Boycott/about",
    element: (
      <Layout>
        <About />
      </Layout>
    ),
  },
]);

export default appRouter;
