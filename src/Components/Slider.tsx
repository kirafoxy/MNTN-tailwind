

export default function Slider(){
    return(
        <div className="text-white fixed right-0 tracking-wide container flex flex-col align-middle w-20 h-40  text-lg gap-y-10 font-abel font-bold">
            <p className="">
                <a href="#hero-content">Start</a></p>
            <ul className=" flex flex-col gap-y-10 items-center">
                <li className="">
                    <a href="#article1">01</a>
                </li>
                <li className="">
                    <a href="#article2">02</a>
                </li>
                <li className="">
                    <a href="#article3">03</a>
                </li>
                
            </ul>
        </div>
    )
}
Slider()