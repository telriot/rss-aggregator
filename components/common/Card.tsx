//  ======================================== IMPORTS
import React, { FC, ReactNode } from 'react'
import clsx from 'clsx'
//  ======================================== COMPONENT
interface CardProps {
    children: ReactNode
    className?:string
    onClick?:()=>void
}
const Card : FC<CardProps> = ({children, className, onClick}) => {
    //  ======================================== HOOKS
    //  ======================================== STATE
    //  ======================================== HANDLERS
    //  ======================================== EFFECTS
    //  ======================================== JSX
    return (
        <div className={clsx(className, 'flex mb-3 bg-gray-50 shadow-md rounded')} onClick={onClick}>
            {children}
        </div>
    )
}
 
//  ======================================== EXPORTS
export default Card
//  ========================================