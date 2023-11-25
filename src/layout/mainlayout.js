import { Outlet } from "react-router-dom";
import Navbar from "../component/navbaar";

const MainLayout = () =>{
    return(
       <>
       <Navbar/>
       <main>
       <Outlet/>
       </main>
       </>
    )
}

export default MainLayout;