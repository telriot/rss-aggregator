//  ======================================== IMPORTS
import clsx from 'clsx';
import React, { FC } from 'react';
import { FeedItem } from 'types';
import Avatar from './common/Avatar';
import Card from './common/Card';
import { FEEDS } from 'public/feeds';
//  ======================================== COMPONENT
interface FeedItemCardProps {
	className?: string;
	feedItem: FeedItem;
}
const FeedItemCard: FC<FeedItemCardProps> = ({ className, feedItem }) => {
	//  ======================================== HOOKS
	//  ======================================== STATE
	//  ======================================== HANDLERS
	const onClick = () => {
		window.location.href = feedItem.link;
	};
	//  ======================================== EFFECTS
	//  ======================================== JSX

	const feed = FEEDS[feedItem.feedIndex];
	return (
		<Card className={clsx(className, 'flex items-center p-1')}>
			<Avatar
				className='cursor-pointer'
				onClick={onClick}
				text={feed.capitals}
				colorIndex={feed?.id}
				size='4rem'
				fontSize='1.75rem'
			/>
			<div className='flex flex-col p-2 overflow-hidden'>
				<h3 className='truncate cursor-pointer' onClick={onClick}>
					{feedItem.title}
				</h3>
				<span className='text-xs'>
					By {feedItem.author || feedItem.creator} in {feedItem.feed}
				</span>
				<span className='text-xs'>Published: {feedItem.pubDate}</span>
			</div>
		</Card>
	);
};

//  ======================================== EXPORTS
export default FeedItemCard;
//  ========================================
