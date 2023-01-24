import videoBg from '../Assets/lol.mp4'

export default function Home() {
    return (
        <div className="hero">
            <div class="video-overlay"></div>
            <video src={videoBg} autoPlay muted loop id="myVideo" />
            <div className="container">
                <div className="catch">
                    <p className="header">R.GG</p>
                    <div>
                        <p className="phrase">THE APP IS HERE.</p>
                        <p id="download" onclick="location.href='#'"> Download Now</p>
                    </div>
                </div>
                <div class="search">
                <input type="text" placeholder="Search Yourself or a Champion" id="search" />
                <ul class="region">
                    <button onclick="" class="btn">NA</button>
                    <button onclick="" class="btn">EUW</button>
                    <button onclick="" class="btn">EUN</button>
                    <button onclick="" class="btn">KR</button>
                    <button onclick="" class="btn">BR</button>
                    <button onclick="" class="btn">JP</button>
                    <button onclick="" class="btn">RU</button>
                    <button onclick="" class="btn">OCE</button>
                    <button onclick="" class="btn">TR</button>
                    <button onclick="" class="btn">LAN</button>
                    <button onclick="" class="btn">LAS</button>
                    <button onclick="" class="btn">PH</button>
                    <button onclick="" class="btn">SG</button>
                    <button onclick="" class="btn">TH</button>
                    <button onclick="" class="btn">TW</button>
                    <button onclick="" class="btn">VN</button>
                </ul>
            </div>
            </div>
        </div>
    )
}