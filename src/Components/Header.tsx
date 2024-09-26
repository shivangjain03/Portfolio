


import { IconCircleDashedLetterS } from "@tabler/icons-react";
import Sidebar from "./Sidebar";
import { useMediaQuery } from "@mantine/hooks";
import { useEffect, useState } from "react";

const links=["About","Projects","Skills","Experience","Contact"]
const navLink=(col: Boolean, toggle: () => void)=>{
    return links.map((link,index)=>{
        return <a className={`${col ? 'flex flex-col items-center' : ''} text-textColor text-lg font-mono hover:text-primaryColor`} href={`#${link}`} ><span className="text-primaryColor">0{index+1}. </span>{link}</a>

        })



}

const Header=()=>{
    const isMobile=useMediaQuery('(max-width: $[en(476)])');
    const [show, setShow]=useState(true);
    const [lastScrollY, setLastScrollY]=useState(0);
    const[shadow, setShadow]=useState(false);
    const controlNavbar =() => {
            if(window.scrollY > lastScrollY && window.scrollY > 70) setShow(false);
            else setShow(true);
            if(window.scrollY>70) setShadow(true);
            else setShadow(false);
            setLastScrollY(window.scrollY);
        }
        useEffect(()=>{
            window.addEventListener('scroll', controlNavbar);
            return ()=>window.removeEventListener('scroll', controlNavbar);
        })


    return (
        <nav className={`flex ${show?"translate-y-0":"translate-y-28"}  transition-transform duration-500 ease-in-out  bg-bgColor h-[18vh] px-10 dm-mono-regular justify-between items-center`}>
            <IconCircleDashedLetterS className="z-10" size={65} color="#4cbbd4" stroke={1.25}/>
            <div className="bs:flex gap-8 hidden">
            {navLink(false, () => {})}
            </div>
            <Sidebar/>
        </nav>
    )
};
export default Header;  //exporting the component
export {navLink};

