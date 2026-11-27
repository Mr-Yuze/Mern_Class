import { Link, Outlet } from "react-router-dom";
function Admin() {
    return (
        <div>
            <nav>
                admin layout
                <Link to={"Adashboard"}>Adashboard</Link>
                <Link to={"settings"}>settings</Link>
                <Link to={"userdetails"}>userdetails</Link>
            </nav>
            <Outlet/>
        </div>
      );
}

export default Admin;
