//  ======================================== IMPORTS
import React, { FC } from 'react';
import clsx from 'clsx'
//  ======================================== COMPONENT
const Title: FC<{className:string}> = ({className}) => {
	//  ======================================== HOOKS
	//  ======================================== STATE
	//  ======================================== HANDLERS
	//  ======================================== EFFECTS
	//  ======================================== JSX
	return <h1 className={clsx('text-4xl font-display', className)}>The bubbling pot</h1>;
};

//  ======================================== EXPORTS
export default Title;
//  ========================================
