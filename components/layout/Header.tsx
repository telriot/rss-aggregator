//  ======================================== IMPORTS
import React, { FC } from 'react';
import { useFilter } from 'contexts/filterContext';
import SearchBar from 'components/SearchBar';
import Title from 'components/Title';
import Image from 'next/image';
import { useMediaQuery } from 'react-responsive';
//  ======================================== COMPONENT
const Header: FC = () => {
	//  ======================================== HOOKS
	//  ======================================== STATE
	const { state, dispatch } = useFilter();
	const isMd = useMediaQuery({ query: '(min-width: 768px)' });
	//  ======================================== HANDLERS
	const onSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		dispatch({ type: 'textSearchSet', payload: e.target.value.toLowerCase() });
	};
	const toggleModal = () => {
		!isMd && dispatch({ type: 'modalToggled' });
	};
	//  ======================================== EFFECTS
	//  ======================================== JSX
	return (
		<header className='sticky top-0 bg-white py-4 md:py-7 shadow-md'>
			<div className='container flex justify-between items-center mx-auto px-3'>
				<div className='flex'>
					{isMd && <Title className='mr-4' />}
					<Image
						src='/assets/bubblingpot.png'
						alt='bubbling pot'
						height={40}
						width={40}
                        onClick={toggleModal}
					/>
					{!isMd && (
						<div className='flex items-center mx-4 font-display' onClick={toggleModal}>
							FEEDS
						</div>
					)}
				</div>

				<SearchBar
					className='shadow-md'
					onChange={onSearchChange}
					value={state.textSearch}
				/>
			</div>
		</header>
	);
};

//  ======================================== EXPORTS
export default Header;
//  ========================================
