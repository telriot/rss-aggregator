//  ======================================== IMPORTS
import React, { FC } from 'react';
import FeedItemCard from './FeedItemCard';
import { Feed, FeedItem } from 'types';
import { useFilter } from 'contexts/filterContext';
// UTILS
const byDate = (a: FeedItem, b: FeedItem) => {
	const dateA = new Date(a.pubDate).getTime();
	const dateB = new Date(b.pubDate).getTime();
	return dateA < dateB ? 1 : dateA > dateB ? -1 : 0;
};
//  ======================================== COMPONENT
const FeedsView: FC<{ feeds: Feed[] }> = ({ feeds }) => {
	//  ======================================== HOOKS
	//  ======================================== STATE
	const {
		state: { textSearch, activeFeeds }
	} = useFilter();
	const [aggregateFeeds, setAggregateFeeds] = React.useState<FeedItem[]>([]);
	//  ======================================== HANDLERS
	//  ======================================== EFFECTS
	//  ======================================== JSX
	React.useEffect(() => {
		const aggregateItems: FeedItem[] = [];
		feeds?.forEach((feed, index) =>
			feed.value?.items?.forEach((item) =>
				aggregateItems.push({
					...item,
					feed: feed.value.title,
					feedIndex: index
				})
			)
		);
		const sortedItems = aggregateItems
			.filter(
				(item) =>
					item.title.includes(textSearch) &&
					activeFeeds.includes(item.feedIndex)
			)
			.sort(byDate);
		setAggregateFeeds(sortedItems);
	}, [feeds, textSearch, aggregateFeeds]);

	return (
		<>
			{aggregateFeeds.map((item) => (
				<FeedItemCard key={item.link} feedItem={item} />
			))}
		</>
	);
};

//  ======================================== EXPORTS
export default FeedsView;
//  ========================================
