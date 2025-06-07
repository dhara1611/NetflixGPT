import { createBrowserRouter } from "react-router";
import Body from "./component/Body";
import Browse from "./component/Browse";
import { RouterProvider } from "react-router/dom";

function App() {

  const appRouter = createBrowserRouter([
    {
      path:"/",
      element : <Body/>
    },
    {
      path:"/browse",
      element : <Browse/>
    }

  ]
)
  return (
    <>
  <RouterProvider router ={appRouter}/>
      
    </>
  );
}

export default App;
