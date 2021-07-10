//  ======================================== IMPORTS
import React, { FC } from 'react';
import clsx from 'clsx';
//  ======================================== COMPONENT
const PALETTE = [
	'#f94144',
	'#f3722c',
	'#f8961e',
	'#f9844a',
	'#f9c74f',
	'#90be6d',
	'#43aa8b',
	'#4d908e',
	'#577590',
	'#277da1'
];

interface AvatarProps {
	text: string;
	fontSize?: string;
	size: string;
	colorIndex?: number;
	className?: string;
	onClick?: () => void;
}
const Avatar: FC<AvatarProps> = ({
	text,
	fontSize = '1rem',
	size,
	colorIndex = 0,
	className,
	onClick
}) => {
	//  ======================================== HOOKS
	//  ======================================== STATE
	//  ======================================== HANDLERS
	//  ======================================== EFFECTS
	//  ======================================== JSX
	return (
		<div
			className={clsx(className, 'text-white grid place-items-center rounded')}
			onClick={onClick}
			style={{
				background: PALETTE[colorIndex],
				fontSize,
				minHeight: size,
				minWidth: size,
				maxHeight: size,
				maxWidth: size
			}}>
			{text}
		</div>
	);
};

//  ======================================== EXPORTS
export default Avatar;
//  ========================================
