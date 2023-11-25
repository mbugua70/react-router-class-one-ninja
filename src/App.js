import { RouterProvider } from "react-router-dom";
import { router } from "./component/parentroutes";
// import RoutesOldVersion from "./component/reactoldversion";


function App() {
  return (
    <div className="App">
      {/* <RoutesOldVersion/> */}
      <RouterProvider router={router}/>
    </div>
  );
}

export default App
