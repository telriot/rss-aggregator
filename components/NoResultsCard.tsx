//  ======================================== IMPORTS
import clsx from 'clsx';
import React, { FC } from 'react';
import Card from './common/Card';

//  ======================================== COMPONENT
interface NoResultsCardProps {
	className?: string;
}
const NoResultsCard: FC<NoResultsCardProps> = ({ className }) => {

	//  ======================================== JSX
	return (
		<Card className={clsx(className, 'flex items-center justify-center p-3 bg-yellow-500 text-white')}>
            No results matching your query
		</Card>
	);
};

//  ======================================== EXPORTS
export default NoResultsCard;
//  ========================================
