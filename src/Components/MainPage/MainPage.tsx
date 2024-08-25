import Header from "../Common/Header/Header";
import HeroContent from "../Hero-content/HeroContent";
import Slider from "../Slider";
import Social from "../Social";


export default function MainPage(){
    return(
        <div className="h-105 bg-no-repeat bg-hero-pattern max-h-full bg-auto">
            <Header/>
            <HeroContent/>
            <Social/>
            <Slider/>
        </div>
    )
}

MainPage()