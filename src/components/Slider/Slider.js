import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import AnimationStyles from 'react-awesome-slider/src/styled/fold-out-animation/fold-out-animation.scss';
import { Description, SubTitle, Title, ContentBox, Image, ImageDecor, ImageBox, SlideItem, SliderWrapper } from './StyledComponent'



const AutoplaySlider = withAutoplay(AwesomeSlider);

export default function Sliders() {
    return (
        <SliderWrapper>
            <AutoplaySlider
                animation="foldOutAnimation"
                cssModule={[AnimationStyles]}
                play={true}
                cancelOnInteraction={false} // should stop playing on user interaction
                interval={2000}
            >
                <div>
                    <SlideItem >
                        <ImageBox>
                            <Image src="./images/slider/slide1.jpg" alt="team images" />
                            <ImageDecor />
                        </ImageBox>

                        <ContentBox>
                            <Title>Chocolate pancakes</Title>
                            <SubTitle>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at velit
                                maximus,
                              molestie est a, tempor magna.</SubTitle>
                            <Description>nteger ullamcorper neque eu purus euismod, ac faucibus mauris posuere. Morbi
                              non
                              ultrices ligula. Sed dictum, enim sed
                              ullamcorper feugiat, dui odio vehicula eros, a sollicitudin lorem quam nec sem. Mauris tincidunt feugiat
                              diam convallis
                          pharetra. Nulla facilisis semper laoreet.</Description>
                        </ContentBox>
                    </SlideItem>
                </div>








            </AutoplaySlider>
        </SliderWrapper>
    )
}