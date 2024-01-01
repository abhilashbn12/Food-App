import { useState } from "react";

const Section = ({ title, description, isvisible, setIsVisible }) => {
    return (
        <div className="border border-black m-2 p-2">
            <h2 className="font-bold">{title}</h2>
            {isvisible && <h3>{description}</h3>}
            {isvisible ?
                <button className="cursor-pointer underline" onClick={() => { setIsVisible() }}>Hide</button> :
                <button className="cursor-pointer underline" onClick={() => { setIsVisible() }}>Show</button>
            }
        </div>
    )
}

const InstaMart = () => {
    const [visibleSection, setVisibleSection] = useState("about")
    return (
        <div>
            <Section title={"About InstaMart"} description={"This is About InstaMart"} isvisible={visibleSection == "about"} setIsVisible={() => {
                visibleSection != "about" ? setVisibleSection("about") : setVisibleSection("")
            }} />
            <Section title={"Careers"} description={"This is Careers"} isvisible={visibleSection == "careers"} setIsVisible={() => {
                visibleSection != "careers" ? setVisibleSection("careers") : setVisibleSection("")
            }} />
            <Section title={"Product"} description={"This is Products of InstaMart"} isvisible={visibleSection == "product"} setIsVisible={() => {
                visibleSection != "product" ? setVisibleSection("product") : setVisibleSection("")
            }} />
        </div>
    )
}

export default InstaMart;