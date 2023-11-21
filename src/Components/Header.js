import logo from '../icons_assets/Logo.svg';
import { NavLink } from "react-router-dom";
import './header.css';

function Header() {
    return (
        <header>
            <NavLink to="/">
                <img src={logo} alt="logo image"/>
            </NavLink>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/menu">Menu</NavLink>
                    </li>
                    <li>
                        <NavLink to="/reservation">Reservation</NavLink>
                    </li>
                    <li>
                        <NavLink to="/orderonline">Order Online</NavLink>
                    </li>
                    <li>
                        <NavLink to="/login">Login</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;