export default function Navbar() {
    return (
        <nav className="nav">
            <ul>
                <li><a href='/home'>Home</a></li>
                <li><a href='/settings'>Settings</a></li>
                <li><a href='/contacts'>Contact Us</a></li>
                <li><a href='/notifications'>Notifications</a></li>
                <li id="login" onclick="location.href='#'">Log in</li>
            </ul>
        </nav>
    )
}