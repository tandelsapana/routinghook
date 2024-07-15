import { Link } from "react-router-dom";


const Home = () => {
    return (
        <div>
            <h1> Welcome Home!!!</h1>
            <Link to="/about">  About Us </Link> <br/>
            <Link to="/contact">  Contact Us </Link> <br/>
            <Link to="/employees"> Employees</Link>
        </div>
     );
}
 
export default Home;
