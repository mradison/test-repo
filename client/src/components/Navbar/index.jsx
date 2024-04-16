import { Link } from "react-router-dom";
// import Auth from "../../utils/auth";
// import InstallButton from "../../pages/InstallButton";

const Navbar = () => {
    const logout = (event) => {
        event.preventDefault();
        // Auth.logout();
    };

    return(
        <>
            <nav>
                <div className="3btn">
                    {/* {Auth.loggedIn() ? ( */}
                        <>
                            <div className="pageBtn">
                                <Link className="btn btn-lg btn-primary m-2" to="/">
                                    <button>
                                        Home
                                    </button>
                                </Link>                  
                                <Link className="btn btn-lg btn-primary m-2" to="/services">
                                    <button>
                                        Flavors
                                    </button>
                                </Link>    
                                <Link className="btn btn-lg btn-primary m-2" to="/portfolio">
                                    <button>
                                        Portfolio
                                    </button>
                                </Link >
                                <Link className="btn btn-lg btn-primary m-2" to="/contact">
                                    <button>
                                        Contact
                                    </button>
                                </Link>
                                    {/* <InstallButton /> */}
                            </div>
                        </>
                    {/* ) : ( */}
                        <>
                            {/* <div className="logBtn">
                                    <Link className="btn btn-lg btn-primary m-2" to="/login">
                                        <button>
                                        Login
                                        </button>
                                    </Link>
                                    <Link className="btn btn-lg btn-light m-2" to="/signup">
                                        <button>
                                        Signup
                                        </button>
                                    </Link>
                            </div> */}
                        </>
                    {/* )} */}
                </div>
            </nav>
        </>
    );

};

export default Navbar;