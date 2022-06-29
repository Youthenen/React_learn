import React from 'react';
import useTheme from './Component/useTheme';
import './global.css'
export default function App(){
    const {isDarkMode} = useTheme()
    console.log(isDarkMode);
    return (
        <div>
        <div className='dark'>
            <div className='bg'>hhhhh</div>
            <div className='bg dark:bg-black'>hhhhhhhh</div>
        </div>
    )
}