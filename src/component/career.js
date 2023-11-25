import { useLoaderData, Link } from "react-router-dom";
import { fetchCareerData } from "./dataapi";

export const careerloaders = async () =>{
    const data = await fetchCareerData();
   return data
}

const Career = () =>{
    const career = useLoaderData();
    console.log(career)
    return(
        <>
        <div className="careers">
          <h2>Careers</h2>
          <p>Ipsum excepteur et quis aliqua tempor velit ea voluptate sunt excepteur qui sint aute.</p>
          {career.map((item) => (
            <Link to={item.id.toString()} key={item.id}>
            <p>{item.title}</p>
            <p>Based on {item.location}</p>
            </Link>
          ))}

        </div>
        </>

    )
}

export default Career;