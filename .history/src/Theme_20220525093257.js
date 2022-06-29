import React from 'react';
import useTheme from './Component/useTheme';
import './global.css'
export default function App(){
    const {isDarkMode} = useTheme()
    console.log(isDarkMode);
    return (
        <div className='dark'>
            <div className='bg dark:bg-black'>hhhhh</div>
            <div className='bg dark:bg-'></div>
        </div>
    )
}