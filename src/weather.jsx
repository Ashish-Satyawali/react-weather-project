import { useState } from "react";
import Infobox from "./info";
import Searchinfo from "./searchinfo";

export default function Weather(){
    let [info,setinfo] = useState({
        city:"Wonderland",
        temp: "27",
        tempMin: "25",
        tempMax: "28",
        humidity: "58",
        feelslike: "27",
        weather: "haze", 
    })

    let updateinfo = (result)=>{
        setinfo(result);
    }
    
    return(
        <div>
            <Searchinfo updateinfo={updateinfo}/>
            <Infobox info={info} />
        </div>
    )
}