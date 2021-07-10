//  ========================================
//  File Name: InViewCounterDiv.tsx
//  Description: 
//  ----------------------------------------
//  Author: Beniamino Tartarini
//  Collaborators: Beniamino Tartarini, Julien Hora 
//  ----------------------------------------
//  Team: Nucleus 
//  ======================================== 
 
//  ======================================== IMPORTS
import React from 'react'
import { useInView } from 'react-intersection-observer'
import clsx from 'clsx'
//  ======================================== TYPES
export interface ITFInViewDivProps
{
    children?: React.ReactNode
    className?: string
    onInView: () => void
}
//  ======================================== COMPONENT
const InViewDiv = (
    {
        children,
        className,
        onInView,
    }: ITFInViewDivProps) =>
{
    //  ======================================== HOOKS
    const { ref: InViewRef, inView } = useInView()

    //  ======================================== EFFECTS
    React.useEffect(() => { inView && onInView() }, [inView])

    //  ======================================== JSX
    return (
        <div className={clsx(className)} ref={InViewRef}>
            {children}
        </div>)
}

//  ======================================== EXPORTS
export default InViewDiv
//  ========================================