import React from "react";
import Headshot from "../images/Smile (1 of 1)-2.jpg"

const BioPage = (props) => {
// ADD PICTURE
    return (
        <div className="container my-4">
            <div className="row">
                <div className="col section-2-box wow fadeInLeft">
                    <h3 className="whitesmoke">Bio:</h3>
                    <hr />
                    <div className="row align-items-center">
                        <div className="col-sm">
                            <img src={Headshot} alt="Cayman Headshot" style={{width:"60%"}}/>
                        </div>

                        <div className="col">
                            <p className="whitesmoke indent" style={{textAlign: "left"}}>
                                Los Angeles based full stack software developer, musician, producer, and audio engineer. Passionate, organized, self-starter, seeking a position to utilize technical engineering and recording expertise in the music/entertainment industry.
                            </p>
                            <p className="whitesmoke indent" style={{textAlign: "left"}}>
                                Coming from a music and film background, I am avidly driven with creativity, enthusiasm, and determination on every project.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BioPage;