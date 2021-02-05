import React from "react";

const TechPage = (props) => {
// ADD PICTURE
    return (
        <div className="container my-4">
            <div className="row">
                <div className="col section-2-box wow fadeInLeft">
                    <h3 className="whitesmoke">Technologies:</h3>
                    <hr />
                    <h6 className="whitesmoke" >Software Development:</h6>
                    <p className="medium-paragraph whitesmoke" style={{textAlign: "left"}}>
                        Coding Languages: C#, Python, JavaScript, CSS, HTML
                    </p>
                    <p className="medium-paragraph whitesmoke" style={{textAlign: "left"}}>
                        Frameworks/Libraries: ASP.NET, Django, Express, React, Node, Bootstrap, jQuery
                    </p>
                    <p className="medium-paragraph whitesmoke" style={{textAlign: "left"}}>
                        Databases: MongoDB, SQLite, MySQL
                    </p>
                    <p className="medium-paragraph whitesmoke" style={{textAlign: "left"}}>
                        Other Tools: Amazon Web Services (AWS), Nginx, Gunicorn
                    </p>
                    <h6 className="whitesmoke" >Producing/Audio Engineering:</h6>
                    <p className="medium-paragraph whitesmoke" style={{textAlign: "left"}}>
                        DAWs: ProTools, Ableton Live, Cubase, and Logic
                    </p>
                    <p className="medium-paragraph whitesmoke" style={{textAlign: "left"}}>
                        Plug-Ins: Izotope RX, Antares AutoTune, UAD Plug-ins, NI Komplete Kontrol, Serum, Pro-Q etc.
                    </p>
                    <h6 className="whitesmoke" >Musical Instruments:</h6>
                    <p className="medium-paragraph whitesmoke" style={{textAlign: "left"}}>
                        Instruments:
                    </p>
                    <p className="medium-paragraph whitesmoke" style={{textAlign: "left"}}>
                        Genres: Jazz, Pop, RnB, Rock, Blues, Indie, Metal, Classical, Prog, Electronic, etc. 
                    </p>
                </div>
            </div>
        </div>
    );
};

export default TechPage;