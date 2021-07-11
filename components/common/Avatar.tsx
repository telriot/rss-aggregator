//  ======================================== IMPORTS
import React, { FC } from 'react';
import clsx from 'clsx';
import color from 'color';
//  ======================================== COMPONENT
const PALETTE: string[] = [
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
	disabled?: boolean;
}
const Avatar: FC<AvatarProps> = ({
	text,
	fontSize = '1rem',
	size,
	colorIndex = 0,
	className,
	onClick,
	disabled
}) => {
	//  ======================================== HOOKS
	//  ======================================== STATE
	//  ======================================== HANDLERS
	//  ======================================== EFFECTS
	//  ======================================== JSX
	return (
		<div
			className={clsx('text-white grid place-items-center rounded', className)}
			onClick={onClick}
			style={{
				background: disabled
					? color(PALETTE[colorIndex]).lighten(0.45).toString()
					: PALETTE[colorIndex],
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
