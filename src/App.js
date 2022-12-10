import { RouterProvider } from "react-router-dom";
import router from "./Routes/Router";

function App() {
  return (
    <div className="bg-[#2b2742] text-white">
      <RouterProvider router={router}>

      </RouterProvider>
    </div>
  );
}

export default App;
