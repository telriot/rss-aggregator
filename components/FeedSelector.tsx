//  ======================================== IMPORTS
import React, { FC } from 'react';
import { FeedData } from 'types';
import Avatar from 'components/common/Avatar';
import { useFilter } from 'contexts/filterContext';
import clsx from 'clsx';
//  ======================================== COMPONENT
const FeedSelector: FC<{ feedData: FeedData }> = ({ feedData }) => {
	//  ======================================== HOOKS
	const { dispatch, state } = useFilter();
	//  ======================================== STATE
	const isActive = state.activeFeeds.includes(feedData.id);
	//  ======================================== HANDLERS
	const handleClick = () => {
		dispatch({ type: 'feedToggled', payload: feedData.id });
	};
	//  ======================================== EFFECTS
	//  ======================================== JSX
	return (
		<div className='flex cursor-pointer mb-1' onClick={handleClick}>
			<Avatar
				text={feedData.capitals}
				disabled={!isActive}
				size='2.25rem'
				fontSize='1rem'
				colorIndex={feedData.id}
			/>
			<div className='p-2 truncate'>
				<span className={clsx(!isActive && 'text-gray-300')}>
					{feedData.title}
				</span>

			</div>
		</div>
	);
};

//  ======================================== EXPORTS
export default FeedSelector;
//  ========================================
