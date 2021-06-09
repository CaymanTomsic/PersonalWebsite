import React, { useState } from 'react';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption,
    Button
} from 'reactstrap';

const items = [
    {
        src: 'https://www.youtube.com/embed/vwZ9eLUomss',
        altText: 'Slide 1',
    },
    {
        src: 'https://www.youtube.com/embed/EpA0x_HP3Pg',
        altText: 'Slide 2',
    },
    {
        src: 'https://www.youtube.com/embed/8lHKLaosPfU',
        altText: 'Slide 3',
    },
    {
        src: 'https://www.youtube.com/embed/19njk6Wwc1A',
        altText: 'Slide 4',
    }
];

const VideoPage = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    }

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    }

    const slides = items.map((item) => {
        return (
                <CarouselItem
                    onExiting={() => setAnimating(true)}
                    onExited={() => setAnimating(false)}
                    key={item.src}
                >
                    <div style={{position:"relative", height: "0", paddingBottom:"56.28%"}}>
                        <iframe src={item.src} style={{position:"absolute", width:"100%", height:"100%", left:"0"}} width="640" height="360" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                    </div>
                    <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
                </CarouselItem>
        );
    });

    return (
        <div className="my-3 video-page container">
            {/* <!-- Top content --> */}
            <div className="top-content whitesmoke">
                {/* <!-- Title and description row --> */}
                <div className="row">
                    <div className="col col-md-10 offset-md-1 col-lg-8 offset-lg-2">
                        <h3 className="whitesmoke">Music:</h3>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col- carousel-button" style={{width:"3em"}}>
                        <Button outline color="light" onClick={previous}> ← </Button>
                    </div>
                    <div class="col-md">
                        <Carousel
                            activeIndex={activeIndex}
                            next={next}
                            previous={previous}
                            interval={false}
                        >
                            {slides}
                        </Carousel>
                        <div className="container" id="video-container">
                            <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
                        </div>
                    </div>
                    <div className="col- carousel-button" style={{width:"3em" ,height:"3em"}}>
                        <Button outline color="light" onClick={next}> → </Button>
                    </div>
                    <div className="description">
                            <h6 className="whitesmoke p-1 my-1" style={{border: "1px solid #f1f1f1", backgroundColor: "rgba(0,0,0, 0.4)"}}>
                                These are original, guitar-based compositions originally uploaded on the public <a href="https://www.instagram.com/caymant/?hl=en">@CaymanT</a> Instagram artist page
                            </h6>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default VideoPage;