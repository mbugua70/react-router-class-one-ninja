import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <>

          <div>
             <h2>Page Not Found!</h2>
             <p>Ut laboris sunt mollit elit consectetur consequat labore culpa mollit elit occaecat. Minim Lorem sunt ipsum proident voluptate sit dolor exercitation. Est enim proident dolor irure commodo excepteur nisi elit mollit non.</p>
             <p>Go to <Link to="/">Homepage</Link></p>
          </div>
        </>
     );
}

export default NotFound;