import React from 'react'
import { CheckCircledIcon } from '@radix-ui/react-icons'

interface FormSuccessProps {
    message?: string
}

const FormSuccess = ({message} : FormSuccessProps) => {
    if(!message) return null;
  return (
    <div className='bg-emerald-500/15 p-3 text-emerald-500 flex 
    items-center gap-x-2 text-sm rounded-md'>
        <CheckCircledIcon />
        {message}
    </div>
  )
}

export default FormSuccess