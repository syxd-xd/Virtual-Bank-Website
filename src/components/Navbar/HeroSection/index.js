import React, { useState } from 'react'
import Video from '../../../videos/video.mp4'
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from './HeroElements'
import { Button } from '../ButtonElements'
// import { BsArrowRight } from 'react-icons/bs'

const HeroSection = () => {
    const [hover, setHover] = useState(false)
    const onHover = () => {
        setHover(!hover)
    }
    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBg>
            <HeroContent>
                <HeroH1> Virtual Banking Made Easy</HeroH1>
                <HeroP>
                    SignUp for  a new accounts today and receive $25 in credit towards your next payment.
                </HeroP>
                <HeroBtnWrapper>
                    < Button to='signup' onMouseEnter={onHover}
                        onMouseLeave={onHover}
                        primary="true"
                        dark="true"
                        smooth={true}
                        duration={400}
                        spy={true}
                        exact="true"
                        offset={80}
                    >
                        Get Started {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
