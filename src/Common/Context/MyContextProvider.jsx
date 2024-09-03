import React, { useState } from 'react'
import MyContext from './MyContext'
import { useLocation, useNavigate } from 'react-router-dom'

const MyContextProvider = ({children}) => {
    const Navigate = useNavigate()

    const location = useLocation()

    const [isOpen, setIsOpen] = useState(false)
  return (
<MyContext.Provider value={{isOpen, setIsOpen,Navigate,location}}>
{children}
</MyContext.Provider>
  )
}

export default MyContextProvider