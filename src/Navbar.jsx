import { Link, Outlet } from "react-router-dom"

const Navbar = () => {
    return (
        <div>
            <div className="
            Navbar">
 
                <Link to="/books"> کتاب ها </Link>
                <Link to="/about"> درباره ما </Link>
            </div>

            <hr />

            <Outlet />
        </div>
    )

}

export default Navbar