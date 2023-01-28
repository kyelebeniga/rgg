export default function Navbar() {
    return (
        <nav className="nav">
            <ul>
                <li><a href='/rgg/home'>Home</a></li>
                <li><a href='/rgg/settings'>Settings</a></li>
                <li><a href='/rgg/contacts'>Contact Us</a></li>
                <li><a href='/rgg/notifications'>Notifications</a></li>
                <li id="login" onclick="location.href='#'">Log in</li>
            </ul>
        </nav>
    )
}