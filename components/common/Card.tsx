//  ======================================== IMPORTS
import React, { FC, ReactNode } from 'react'
import clsx from 'clsx'
//  ======================================== COMPONENT
interface CardProps {
    children: ReactNode
    className?:string
}
const Card : FC<CardProps> = ({children, className}) => {
    //  ======================================== HOOKS
    //  ======================================== STATE
    //  ======================================== HANDLERS
    //  ======================================== EFFECTS
    //  ======================================== JSX
    return (
        <div className={clsx(className, 'flex mb-3 bg-gray-50 shadow-md rounded')}>
            {children}
        </div>
    )
}
 
//  ======================================== EXPORTS
export default Card
//  ========================================