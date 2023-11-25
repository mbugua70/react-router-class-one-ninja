import About from "./aboutold";
import {Route} from 'react-router-dom'

// react routers 6

import HomeOld from "./homeold";



import { createBrowserRouter, createRoutesFromElements } from "react-router-dom";
// import ParentRoutes from "./parentroutes";
import MainLayout from "../layout/mainlayout";
import HelpLayout from "../layout/helplayout";
import FaqPage from "./help/faq";
import ContactPage, { contactAction } from "./help/contact";
import NotFound from "./notfound";
import Career, { careerloaders } from "./career";
import CareerLayout from "../layout/careerlayout";
import CareerDetails, { careerDetailsLoader } from "./careerdetails";
import CareerError from "./CareerError";



export  const  router = createBrowserRouter(
    createRoutesFromElements(
        <Route element={<MainLayout/>}>
            <Route path="/" element={<HomeOld/>}/>
            <Route path ="about" element={<About/>}/>
            <Route path = "help" element={<HelpLayout/>}>
                <Route path = "faq" element={<FaqPage/>}/>
                <Route
                path = "contact"
                element={<ContactPage/>}
                action={contactAction}
                />
            </Route>
            <Route path="careers" element={<CareerLayout/>} errorElement={<CareerError/>}>
                <Route
                index
                element={<Career/>}
                loader={careerloaders}
                />
                <Route
                path=":id"
                element={<CareerDetails/>}
                loader={careerDetailsLoader}
                />
            </Route>
            <Route path="*" element={<NotFound/>}/>
          </Route>
    )
)
