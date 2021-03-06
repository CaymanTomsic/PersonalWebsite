import React from 'react';
import VideoPage from '../components/VideoPage';
import Bokeh from "../images/bokeh.jpg"
import CityFog from "../images/CityFog.jpg"
import BlackPaper1 from "../images/BlackPaper1.jpg"
import BlackPaper2 from "../images/BlackPaper2.jpg"
import BioPage from "../components/BioPage";
import ExperiencePage from "../components/ExperiencePage";
import TechPage from "../components/TechPage";
import SynthApp from "../components/SynthApp";

const MainPage = (props) => {
    return(
        <div className="container-fluid p-0">
            <div id="top"></div>
            <div className="container-fluid py-1" style={{backgroundImage: `url(${CityFog})`, backgroundRepeat:"none", backgroundSize:"100em", backgroundPosition:"20% 90%", backgroundAttachment:"fixed"}}>
            {/* <div className="container-fluid py-1" style={{backgroundImage: `url(${Bokeh})`, backgroundRepeat:"none", backgroundSize:"200em", backgroundPosition:"20% 90%", backgroundAttachment:"fixed"}}> */}
                <div className="pt-5 mt-3">
                    <VideoPage/>
                </div>
            </div>
            <div id="bio-container"></div>
            <div className="container-fluid py-1" style={{backgroundImage: `url(${BlackPaper1})`, backgroundRepeat:"none"}}>
                <BioPage/>
            </div>
            <div id="synth-container"></div>
            <div className="container-fluid py-1" style={{backgroundImage: `url(${BlackPaper2})`, backgroundRepeat:"none", backgroundAttachment:"fixed"}}>
                <SynthApp/>
            </div>
            <div id="experience-container"></div>
            <div className="container-fluid py-1" style={{backgroundImage: `url(${BlackPaper1})`, backgroundRepeat:"none"}}>
                <ExperiencePage/>
            </div>
            <div id="tech-container"></div>
            <div className="container-fluid py-1" style={{backgroundImage: `url(${BlackPaper2})`, backgroundRepeat:"none", backgroundAttachment:"fixed"}}>
                <TechPage/>
                <div className="mb-5"></div>
            </div>
        </div>
    );
};


export default MainPage;