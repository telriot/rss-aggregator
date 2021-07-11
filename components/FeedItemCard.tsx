//  ======================================== IMPORTS
import clsx from 'clsx';
import React, { FC } from 'react';
import { FeedItem } from 'types';
import Avatar from './common/Avatar';
import Card from './common/Card';
import { FEEDS } from 'public/feeds';
import parseDate from 'utils/parseDate';
import { useMediaQuery } from 'react-responsive';

//  ======================================== COMPONENT
interface FeedItemCardProps {
	className?: string;
	feedItem: FeedItem;
}
const FeedItemCard: FC<FeedItemCardProps> = ({ className, feedItem }) => {
	//  ======================================== HOOKS
	//  ======================================== STATE
	const isSm = useMediaQuery({ query: '(min-width: 640px)' });

	//  ======================================== HANDLERS
	const onClick = () => {
		window.location.href = feedItem.link;
	};
	const { date, time } = parseDate(feedItem.pubDate);
	//  ======================================== EFFECTS
	//  ======================================== JSX

	const feed = FEEDS[feedItem.feedIndex];
	return (
		<Card className={clsx(className, 'flex items-center px-2')}>
			{isSm && (
				<Avatar
					className='cursor-pointer'
					onClick={onClick}
					text={feed.capitals}
					colorIndex={feed?.id}
					size='4rem'
					fontSize='1.75rem'
				/>
			)}
			<div className='flex flex-col p-2 overflow-hidden'>
				<h3 className='mb-1 sm:truncate cursor-pointer' onClick={onClick}>
					{feedItem.title}
				</h3>
				<div className='flex items-center'>
					{!isSm && (
						<Avatar
							className='cursor-pointer mr-2'
							onClick={onClick}
							text={feed.capitals}
							colorIndex={feed?.id}
							size='2.5rem'
							fontSize='1rem'
						/>
					)}
					<div className='flex flex-col'>
						<span className='text-xs text-gray-500'>
							By {feedItem.author || feedItem.creator} in <i>{feedItem.feed}</i>
						</span>
						<span className='text-xs text-gray-500 '>
							on {date} at {time}
						</span>
					</div>
				</div>
			</div>
		</Card>
	);
};

//  ======================================== EXPORTS
export default FeedItemCard;
//  ========================================
