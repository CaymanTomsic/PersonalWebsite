import React from "react";
import SynthAppPic from "../images/SynthAppPic.png"

const SynthApp = (props) => {
    return (
        <div className="container my-4">
            <div className="row section-2-box wow fadeInLeft justify-content-center">
                <h3 className="whitesmoke">SynthApp:</h3>
                <hr />
                <div className="row align-items-center">
                    <div className="row-sm mb-4">
                        <img src={SynthAppPic} alt="SynthApp Screenshot" style={{width:"50%"}}/>
                    </div>
                </div>

                <div className="row w-50 align-items-center">
                    <div className="d-flex justify-content-center">
                        <p className="whitesmoke indent p-3" style={{border: "1px solid #f1f1f1", backgroundColor: "rgba(0,0,0, 0.4)",textAlign: "left"}}>
                            <a href="http://3.129.13.142/">SynthApp</a> is a dual oscillator, browser-based synthesizer built on the open-source Beep.js platform. SynthApp is currently in an open Beta stage. The current build features fully functional and modifiable oscillators, basic patch saving/loading, and Web MIDI support. At this stage, the GUI and UX are still in development. One of the newest features being implemented is the ability to share and browse presets made by other users. Patch browsing is currently available on the GitHub SynthApp Extended repository.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SynthApp;