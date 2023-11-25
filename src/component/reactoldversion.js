import {BrowserRouter, Routes, Route, Link, NavLink} from 'react-router-dom'
import HomeOld from './homeold';
import About from './aboutold';
import Services from './serviceold';

const RoutesOldVersion = () =>{
    return(
        <>

        <BrowserRouter>
        <header>
            <nav>
                <h1>Logo</h1>
                <NavLink to="/">Home</NavLink>
                <NavLink to="about">About</NavLink>
            </nav>
        </header>
         <main>
        <Routes>
        <Route path='/' element={<HomeOld/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='/services' element={<Services/>}/>
        </Routes>
         </main>
        </BrowserRouter>

        </>
    )
}

export default RoutesOldVersion;