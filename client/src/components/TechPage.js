import React from "react";

const TechPage = (props) => {
// maybe change to table/list
    return (
        <div className="container my-4">
            <div className="row justify-content-center">
                <div className="col">
                    <h3 className="whitesmoke">Technologies:</h3>
                    <hr />
                    <h6 className="bluetext" >Software Development:</h6>
                    <p className="medium-paragraph whitesmoke text-left">
                        <span className="pinktext"> Coding Languages</span>: C#, Python, JavaScript, CSS, HTML
                    </p>
                    <p className="medium-paragraph whitesmoke text-left">
                        <span className="pinktext">Frameworks/Libraries</span>: ASP.NET, Django, Express, React, Node, Bootstrap, jQuery
                    </p>
                    <p className="medium-paragraph whitesmoke text-left">
                        <span className="pinktext">Databases</span>: MongoDB, SQLite, MySQL
                    </p>
                    <p className="medium-paragraph whitesmoke text-left">
                        <span className="pinktext">Deployment Tools</span>: Amazon Web Services (AWS), Nginx, Gunicorn
                    </p>
                    <h6 className="bluetext" >Producing/Audio Engineering:</h6>
                    <p className="medium-paragraph whitesmoke text-left" style={{textAlign: "left"}}>
                        <span className="pinktext">DAWs</span>: Pro Tools, Ableton Live, Cubase, and Logic
                    </p>
                    <p className="medium-paragraph whitesmoke text-left" style={{textAlign: "left"}}>
                        <span className="pinktext">Plug-Ins</span>: Izotope RX, Antares AutoTune, UAD Plug-ins, NI Komplete Kontrol, Serum, Pro-Q, etc.
                    </p>
                    <h6 className="bluetext" >Musical Instruments:</h6>
                    <p className="medium-paragraph whitesmoke text-left" style={{textAlign: "left"}}>
                        <span className="pinktext">Instruments</span>: Electric/Acoustic/Classical Guitar, Drum Kit, Hand Percussion, Electric Bass, Synthesizer, and Keyboard
                    </p>
                    <p className="medium-paragraph whitesmoke text-left" style={{textAlign: "left"}}>
                        <span className="pinktext">Genres</span>: Jazz, Pop, RnB, Rock, Blues, Indie, Metal, Classical, Prog, Electronic, etc.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default TechPage;