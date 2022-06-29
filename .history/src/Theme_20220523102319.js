import React from 'react';
import useTheme from './Component/useTheme';
export default function App(){
    const {isDarkMode} = useTheme()
    console.log(isDarkMode);
    return (
        <div className=''>
            <div className='bg-white dark:bg-black' style={{backgroundColor:black'}}>hhhhh</div>
        </div>
    )
}