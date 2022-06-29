import React from 'react';
import useTheme from './Component/useTheme';
export default function App(){
    const {isDarkMode} = useTheme()
    console.log(isDarkMode);
    return (
        <div>
            <div className='dark:text-white'>hhhhh</div>
        </div>
    )
}