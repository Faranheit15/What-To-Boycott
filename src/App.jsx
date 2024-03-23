import { RouterProvider } from "react-router-dom";
import appRouter from "@/routes/index";

const App = () => {
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default App;
