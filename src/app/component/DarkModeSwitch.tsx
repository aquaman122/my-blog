// 'use client'
// import { MdLightMode, MdModeNight } from 'react-icons/md';
// import { useTheme } from 'next-themes';
// import { useEffect, useState } from 'react';

// type Props = {}

// export default function DarkModeSwitch({}: Props) {
//   const {systemTheme, theme, setTheme} = useTheme();
//   const [ mounted, setMounted ] = useState(false);

//   useEffect(() => setMounted(true), []);
//   const currentTheme = theme === "system" ? systemTheme : theme;
//   return (
//     <>
//       {mounted && currentTheme === "dark" ?(
//         <MdLightMode className='text-3xl cursor-pointer hover:text-gray-500' onClick={() => setTheme('light')}/>
//       ): (
//         <MdModeNight className='text-3xl cursor-pointer hover:text-gray-500' onClick={() => setTheme('dark')}/>
//       )}
//     </>
//   )
// }