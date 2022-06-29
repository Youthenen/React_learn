import React from 'react';
import useTheme from './Component/useTheme';
import './'
export default function App(){
    const {isDarkMode} = useTheme()
    console.log(isDarkMode);
    return (
        <div className='dark'>
            <div className='bg-white dark:bg-black'>hhhhh</div>
        </div>
    )
}