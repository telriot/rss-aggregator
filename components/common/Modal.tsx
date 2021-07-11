//  ======================================== IMPORTS

import React, { MouseEvent } from 'react';
import clsx from 'clsx';
interface ChildrenProps { children: React.ReactNode}
//  ======================================== SUBCOMPONENT
export const ModalTitle : React.FC<ChildrenProps>= ({ children }) => {
	return <div className='mb-8 text-center text-xl'>{children}</div>;
};
//  ======================================== SUBCOMPONENT
export const ModalButtonDiv : React.FC<ChildrenProps> = ({ children }) => {
	return <div className='flex justify-around'>{children}</div>;
};
//  ======================================== COMPONENT
interface ModalProps {
	children: React.ReactNode;
	isOpen: boolean;
	onClose: () => void;
}
const Modal : React.FC<ModalProps>= ({ children, isOpen, onClose }) => {
	//  ======================================== HOOKS
	//  ======================================== STATE
	//  ======================================== HANDLERS
	const handleModalClick = (e: MouseEvent) => e.stopPropagation();
	//  ======================================== EFFECTS
	//  ======================================== JSX
	return (
		<div
			aria-label='modal-overlay'
			className={clsx(
				'fixed top-0 left-0 w-screen h-screen flex items-center justify-center p-1 sm:p-3 transition-color duration-100 z-50',
				{
					'bg-gray-900 bg-opacity-30': isOpen,
					'opacity-0 pointer-events-none': !isOpen
				}
			)}
			onClick={onClose}>
			<div
				onClick={handleModalClick}
				className={clsx('rounded  w-72 sm:w-80 lg:w-96 px-4 sm:px-8 md:px-12 py-4 bg-body border-2 shadow-md z-100 ', {
					'bg-white bg-opacity-100': isOpen,
					'bg-transparent bg-opacity-0': !isOpen
				})}>
				{children}
			</div>
		</div>
	);
};

//  ======================================== EXPORTS
export default Modal;
//  ========================================
