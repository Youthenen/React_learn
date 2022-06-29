import {useState,useEffect} from 'react'
function useTheme(){
    const [themeName,setThemeName] = useState("light")
    useEffect(() => {
        // 设置初始皮肤
        if(window.matchMedia("(prefers-color-scheme:dark)").matches){
            setThemeName("dark")
        }else{
            setThemeName("light")
        }
        window.matchMedia("(prefers-color-scheme:dark)")
        .addEventListener("change",(e)=>{
            if(e.matches){
                setThemeName("dark")
            }else{
                setThemeName("light")
            }
        })
    },[])

    return{
        themeName,
        isDarkMode"
    }
}
