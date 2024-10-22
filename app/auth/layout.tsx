import React from 'react'

const AuthLayout = ({children} : {children: React.ReactNode}) => {
  return (
    <div 
        className='
            min-h-screen 
            flex 
            flex-col 
            items-center 
            justify-center
            bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))]
            from-teal-500
            to-teal-600
            '
        >
        {children}
    </div>
  )
}

export default AuthLayout