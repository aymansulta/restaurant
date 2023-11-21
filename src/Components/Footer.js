import './footer.css';
import chef from "../icons_assets/restaurant chef B.jpg"

function Footer () {
    return(
        <footer>
            <section className='section'>
                <img className='footer-img' src={chef} alt="chef"/>
            </section>
            <section className='section'>
                <h4>Doormat <br/>Navigatiom</h4>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Reservation</li>
                    <li>Order Online</li>
                    <li>Login</li>
                </ul>
            </section>
            <section className='section'>
            <h4>Contact</h4><br/>
                <ul>
                    <li>Address</li>
                    <li>Phone number</li>
                    <li>email</li>
                </ul>
            </section>
            <section className='section'>
            <h4>Social Media Links</h4><br/>
                <ul>
                    <li>Address</li>
                    <li>Phone number</li>
                    <li>email</li>
                </ul>
            </section>
        </footer>
    )
}

export default Footer;