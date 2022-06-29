import {useState,useEffect} from 'react'
function useTheme(){
    const [themeName,setThemeName] = useState("light")
    useEffect(() => {
        设置chu shi皮肤
        if(window.matchMedia("(prefers-color-scheme:dark)").matches){
            setThemeName("dark")
        }else{
            setThemeName("light")
        }
    })
}
