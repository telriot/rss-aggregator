//  ======================================== IMPORTS
import React, { FC, useEffect, useState } from 'react';
import FeedItemCard from './FeedItemCard';
import { FeedItem } from 'types';
import { useFilter } from 'contexts/filterContext';
import InViewDiv from './common/InViewDiv';
import NoResultsCard from './NoResultsCard';
// UTILS
const byDate = (a: FeedItem, b: FeedItem) => {
	const dateA = new Date(a.pubDate).getTime();
	const dateB = new Date(b.pubDate).getTime();
	return dateA < dateB ? 1 : dateA > dateB ? -1 : 0;
};
//  ======================================== COMPONENT
const FeedsView: FC<{ feedItems: FeedItem[] }> = ({ feedItems }) => {
	//  ======================================== HOOKS
	//  ======================================== STATE
	const {
		state: { textSearch, activeFeeds }
	} = useFilter();
	const [maxIndex, setMaxIndex] = useState<number>(30);
	const [renderedFeeds, setRenderedFeeds] = useState<FeedItem[]>([]);
	//  ======================================== HANDLERS
	const onInView = () => {
		setMaxIndex((prev) => prev + 30);
	};
	//  ======================================== EFFECTS
	//  ======================================== JSX
	useEffect(() => {
		const sortedItems = feedItems
			.filter(
				(item) =>
					item.title.toLowerCase().includes(textSearch) &&
					activeFeeds.includes(item.feedIndex)
			)
			.sort(byDate)
			.filter((_, index) => index < maxIndex);
		setRenderedFeeds(sortedItems);
	}, [feedItems, textSearch, activeFeeds, maxIndex]);

	return (
		<>
			{
			renderedFeeds.length?
			renderedFeeds.map((item, index) => {
				return index === maxIndex - 5 ? (
					<InViewDiv key={item.link} onInView={onInView}>
						<FeedItemCard feedItem={item} />
					</InViewDiv>
				) : (
					<FeedItemCard key={item.link} feedItem={item} />
				);
			})
			:
			<NoResultsCard/>
		}
		</>
	);
};

//  ======================================== EXPORTS
export default FeedsView;
//  ========================================
