import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import AnimationStyles from 'react-awesome-slider/src/styled/fold-out-animation/fold-out-animation.scss';
import { Description, SubTitle, Title, ContentBox, Image, ImageDecor, ImageBox, SlideItem, SliderWrapper } from './StyledComponent'



const AutoplaySlider = withAutoplay(AwesomeSlider);

export default function Sliders({ itemArr }) {
    return (
        <SliderWrapper>
            <AutoplaySlider
                animation="foldOutAnimation"
                cssModule={[AnimationStyles]}
                play={true}
                cancelOnInteraction={false} // should stop playing on user interaction
                interval={3000}
            >

                {itemArr.map(({ imageHref, title, subTitle, description, id }) => (
                    <div key={id}>
                        <SlideItem key={id}>
                            <ImageBox>
                                <Image src={imageHref} alt={title} />
                                <ImageDecor />
                            </ImageBox>

                            <ContentBox>
                                <Title>{title}</Title>
                                <SubTitle>{subTitle}</SubTitle>
                                <Description>{description}</Description>
                            </ContentBox>
                        </SlideItem>
                    </div>
                ))}


            </AutoplaySlider>
        </SliderWrapper>
    )
}