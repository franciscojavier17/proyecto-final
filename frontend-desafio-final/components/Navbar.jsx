import { Link } from "react-router-dom";
import { useOperationsContext } from "../context/OperationsContext";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import logo from "../assets/img/logo3.svg";

export default function Navbar() {
    const { total, FormatCoin } = useOperationsContext();
    const { user } = useContext(AuthContext);
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
            <div className="container">
                <Link className="navbar-brand" to="/">
                    <img src={logo} alt="Logo" width="60" height="55" />
                </Link>
                <button
                    className={`navbar-toggler ${menuOpen ? "" : "collapsed"}`}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded={menuOpen ? "true" : "false"}
                    aria-label="Toggle navigation"
                    onClick={toggleMenu}
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`collapse navbar-collapse ${menuOpen ? "show" : ""}`} id="navbarNav">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 fs-5">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">
                                Inicio
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Login">
                                Iniciar sesión
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Register">
                                Registrate
                            </Link>
                        </li>
                        {user && (
                            <li className="nav-item">
                                <Link className="nav-link" to="/Payment">
                                    Página de Pago
                                </Link>
                            </li>
                        )}
                        <li className="nav-item">
                            <Link className="nav-link" to="/Carrito">
                                <i className="fas fa-shopping-cart"></i> {FormatCoin(total)}
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}