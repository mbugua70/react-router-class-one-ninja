import { useLoaderData, useParams } from "react-router-dom";
import { fetchCareerDetail } from "./dataapi";

export const careerDetailsLoader = async({params}) =>{
    const {id} = params
    const careers = await fetchCareerDetail(id)
    return careers
}

const CareerDetails = () => {
    // const {id} = useParams();
    const careers = useLoaderData();
    console.log(careers)
    return (
        <>
         <div className="career-details">
             <h1>Career details for {careers.title}</h1>
             <p>Starting salary: {careers.salary}</p>
             <p>Location: {careers.location}</p>
             <div className="details">
              <p>Amet tempor reprehenderit magna ullamco culpa nisi velit. Aute quis eu ad ea nisi reprehenderit exercitation consequat et. Officia aliquip ex tempor pariatur culpa irure ullamco nostrud nulla id. Tempor est laboris sit eu in elit do minim ea adipisicing reprehenderit proident. Eiusmod nostrud sunt elit deserunt sunt cillum ipsum sint amet. Commodo ut ex deserunt reprehenderit deserunt enim amet et laborum cillum.</p>
             </div>

         </div>
        </>
      );
}

export default CareerDetails;