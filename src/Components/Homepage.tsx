import { useEffect, useState } from "react";
import About from "./About";
import Contact from "./Contact";
import Experience from "./Experience";
import Footer from "./Footer";
import Header from "./Header";
import { Loader } from "./loader";
import Mail from "./Mail";
import Projects from "./Projects";
import Skills from "./Skills";
import Social from "./Social";
import { Toaster } from "react-hot-toast";

const Homepage=()=>{
    const [loading, setLoading]= useState(true);
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 3000)
    }, [])
    return <div className={`${loading?"flex":""}`}>
    { loading!==true?<>
        <Toaster />
        <Header/>
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
        <Footer />
        <Mail />
        <Social />
        </>:
        <Loader />}
        

        </div>
    
};
export default Homepage;