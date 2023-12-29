// css styles 
import styles from "../styles/navbar.module.css";
// import form react router
import { Outlet, NavLink } from "react-router-dom";

// Navbar Component
export default function Navbar(){
    return(
        <>
            {/* main container */}
            <div className={styles.navbarContainer}> 
                {/* app heading */}
                <div className={styles.appName}>
                    <NavLink to="/">
                        EVOTECH
                    </NavLink>
                </div>

                {/* all the navigation link */}
                <div className={styles.navLinks}>

                    <NavLink to="/">
                        <span>
                            Home
                        </span>
                    </NavLink>

                    <NavLink to="/signup">
                        <span>
                            SignUp
                        </span>
                    </NavLink> 

                    <NavLink to="/login">
                        <span>
                            Login
                        </span>
                    </NavLink> 

                    <NavLink to="/admin">
                        <span>
                            Admin
                        </span>
                    </NavLink>               
                </div>
            </div>
            {/* render child pages */}
            <Outlet />
        </>
    )
}