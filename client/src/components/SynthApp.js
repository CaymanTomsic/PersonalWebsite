import React from "react";
import Headshot from "../images/Smile (1 of 1)-2.jpg"

const SynthApp = (props) => {
// ADD PICTURE
    return (
        <div className="container my-4">
            <div className="row">
                <div className="col section-2-box wow fadeInLeft">
                    <h3 className="whitesmoke">SynthApp:</h3>
                    <hr />
                    <div className="row align-items-center">
                        <div className="col-sm">
                            <img src={Headshot} alt="Cayman Headshot" style={{width:"60%"}}/>
                        </div>

                        <div className="col">
                            <p className="whitesmoke indent" style={{textAlign: "left"}}>
                                SynthApp is a dual oscillator, browser-based synthesizer built on the open-source Beep.js platform. SynthApp is currently in an open Beta stage. The current build features fully functional and modifiable oscillators, basic patch saving/loading, and Web MIDI support. At this stage the GUI and UX are currently still in development. One of the newest features being implemented is the ability to share and browse presets made by other users.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SynthApp;