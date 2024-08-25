

export default function Footer(){
    return(
        <div id="footer" className="text-white container flex justify-between mx-auto mb-30">
            <div className="text-lg">
                <a className='text-white font-light text-4xl font-abel' href="#header">MNTN</a> 
                <p className="mb-30 mt-4">Get out there & discover your next slope, mountain & destination!</p>
                <p className="opacity-20">Copyright 2023 MNTN, Inc. Terms & Privacy</p>
            </div>
            <div className="flex text-lg text-left ">
                <div className="mr-54">
                    <ul className="flex flex-col gap-4">
                        <h2 className="text-yellow text-2xl font-actor font mb-2">More on The Blog</h2>
                        <li>
                            <a href="#hero-section">About MNTN</a>
                        </li>
                        <li>
                            <a href="#">Contributors & Writers</a>
                        </li>
                        <li>
                           <a href="#"> Write For Us</a>
                        </li>
                        <li>
                            <a href="#">Contact Us</a>
                        </li>
                        <li>
                           <a href="#"> Privacy Policy</a>
                        </li>
                    </ul>
                </div>

                <div>
                    <ul className="flex flex-col gap-4 ">
                        <h2 className="text-yellow text-2xl font-actor font mb-2">More on MNTN</h2>
                        <li>
                            <a href="#">The Team</a>
                        </li>
                        <li>
                            <a href="#">Jobs</a>
                        </li>
                        <li>
                            <a href="#">Press</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

Footer