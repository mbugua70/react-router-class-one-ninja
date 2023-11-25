import { Link, useLocation } from "react-router-dom";

const BreadCump = () =>{
    const location = useLocation()
    console.log(location)
    let currentCrump = ''
    const crumps = location.pathname.split('/')
    .filter(crump => crump !== "")
    .map(item =>{
           currentCrump += `/${item}`
           return (
            <div className="crumb" key={item}>
            <Link to ={currentCrump}>{item}</Link>
              </div>
           )
    })
    console.log(crumps)
    return(
        <>
        <div className="breadcrumbs">
            {crumps}
        </div>

        </>
    )
}

export default BreadCump;