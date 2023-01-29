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
                        <p id="download" onClick="location.href='#'"> Download Now</p>
                    </div>
                </div>
                <div class="search">
                <input type="text" placeholder="Search Yourself or a Champion" id="search" />
                <ul class="region">
                    <button onClick="" class="btn">NA</button>
                    <button onClick="" class="btn">EUW</button>
                    <button onClick="" class="btn">EUN</button>
                    <button onClick="" class="btn">KR</button>
                    <button onClick="" class="btn">BR</button>
                    <button onClick="" class="btn">JP</button>
                    <button onClick="" class="btn">RU</button>
                    <button onClick="" class="btn">OCE</button>
                    <button onClick="" class="btn">TR</button>
                    <button onClick="" class="btn">LAN</button>
                    <button onClick="" class="btn">LAS</button>
                    <button onClick="" class="btn">PH</button>
                    <button onClick="" class="btn">SG</button>
                    <button onClick="" class="btn">TH</button>
                    <button onClick="" class="btn">TW</button>
                    <button onClick="" class="btn">VN</button>
                </ul>
            </div>
            </div>
        </div>
    )
}