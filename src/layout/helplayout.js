import { NavLink, Outlet } from "react-router-dom";

const HelpLayout = () =>{
    return(
       <>
         <div className="help-layout">
         <h1>Welcome to the help Layout</h1>
         <p>fCulpa quis consequat laboris laborum labore. Labore do dolor incididunt aliquip sit qui elit amet sint. In in laborum nisi id mollit eiusmod veniam dolor nisi ipsum nostrud est. Esse laborum aliqua exercitation eiusmod do id esse in amet. Ullamco non sunt eiusmod qui non cillum nisi irure. Pariatur consectetur mollit cillum et elit Lorem nostrud culpa est adipisicing nulla anim voluptate nisi.</p>

            <nav>
                <NavLink to="faq">View the FAQ</NavLink>
                <NavLink to="contact">Contact Us</NavLink>
            </nav>
         <Outlet/>
         </div>
       </>
    )
}

export default HelpLayout;