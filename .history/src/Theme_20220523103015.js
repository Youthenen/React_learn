import React from 'react';
import useTheme from './Component/useTheme';
@tailwind base;
@tailwind components;
@tailwind utilities;
export default function App(){
    const {isDarkMode} = useTheme()
    console.log(isDarkMode);
    return (
        <div className='dark'>
            <div className='bg-white dark:bg-black'>hhhhh</div>
        </div>
    )
}