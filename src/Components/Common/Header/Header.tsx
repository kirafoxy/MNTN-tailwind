
export default function Header(){
    return(
        <div className='tracking-wide pb-52 pt-12 container flex flex-auto flex-row mx-24 leading-9'>

            <a className='text-white font-light text-4xl font-abel' href="#">MNTN</a> 
           
            <nav className='flex flex-row mx-auto'>

                <ul className='flex flex-row font-medium text-lg'>
                    <li className='mr-12 font-abel'>
                     <a className='text-white hover:underline  ' href="#">Equipment</a>
                    </li>
                    <li className='mr-12 font-abel'>
                    <a className='text-white hover:underline ' href="#">About us</a> 
                    </li>
                    <li className='font-abel'>
                    <a className='text-white hover:underline ' href="#"> Blog </a>
                    </li>
                </ul>
            </nav>

            <button className="before:content-[url('./assets/avatar.png')] before:inline-block before:align-middle before:mr-2  rounded-lg px-2 font-abel text-white font-light text-lg">Account</button>
            
        </div>
    )
}

Header();