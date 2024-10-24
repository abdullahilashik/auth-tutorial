import React from 'react'
import { ExclamationTriangleIcon } from '@radix-ui/react-icons'

interface FormErrorProps {
    message?: string
}

const FormError = ({message} : FormErrorProps) => {
    if(!message) return null;
  return (
    <div className='bg-destructive/15 p-3 text-destructive flex 
    items-center gap-x-2 text-sm rounded-md'>
        <ExclamationTriangleIcon />
        {message}
    </div>
  )
}

export default FormError