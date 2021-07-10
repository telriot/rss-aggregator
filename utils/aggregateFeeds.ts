import { Feed, FeedItem } from 'types';
/**
 * 
 * @param feeds A set of parsed feeds
 * @returns an aggregate set of feed items
 */
const aggregateFeeds = (feeds: Feed[]) : FeedItem[] => {
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
    return aggregateItems
};
export default aggregateFeeds