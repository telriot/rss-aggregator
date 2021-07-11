//  ======================================== IMPORTS
import React, { FC } from 'react';
import Card from 'components/common/Card';
import { FEEDS } from 'public/feeds';
import FeedSelector from './FeedSelector';
import Modal from './common/Modal';
import { useFilter } from 'contexts/filterContext';
//  ======================================== COMPONENT

export const FilterSectionPopup: FC = () => {
	//  ======================================== STATE
    const {state, dispatch} = useFilter()
    //  ======================================== HANDLERS
    const onClose = () => {dispatch({type:'modalToggled'})}
	//  ======================================== JSX
	return (
		<Modal isOpen={state.isModalOpen} onClose={onClose}>
			<div className='flex flex-col p-2 w-full'>
				{FEEDS.map((feedData) => (
					<FeedSelector key={feedData.id} feedData={feedData} />
				))}
			</div>
		</Modal>
	);
};
const FilterSection: FC = () => {
	//  ======================================== HOOKS
	//  ======================================== STATE
	//  ======================================== HANDLERS
	//  ======================================== EFFECTS
	//  ======================================== JSX
	return (
		<Card className='w-full'>
			<div className='flex flex-col p-2 w-full'>
				{FEEDS.map((feedData) => (
					<FeedSelector key={feedData.id} feedData={feedData} />
				))}
			</div>
		</Card>
	);
};

//  ======================================== EXPORTS
export default FilterSection;
//  ========================================
