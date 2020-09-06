import  React,{useState,createContext} from "react";
import StaticTabbar from "./StaticTabbar";


export const BottomContext = createContext();


export const BottomProvider = (props)=>{
    const [bottom,setBottom] = useState(0);

    return(
        <BottomContext.Provider value={[bottom,setBottom]} >
            {props.children}
        </BottomContext.Provider>
    )
}