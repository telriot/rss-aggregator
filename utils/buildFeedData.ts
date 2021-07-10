import aggregateFeeds from './aggregateFeeds';
import parseApiFeeds from './parseApiFeeds';
import { Feed, APIResData } from 'types';

const buildFeedData = (feeds: Feed[]) : APIResData => {
	const data: APIResData = { feeds: [], feedItems: [] };
	const parsedApiFeeds = parseApiFeeds(feeds);
	data.feeds = parsedApiFeeds;
	data.feedItems = aggregateFeeds(parsedApiFeeds);
	return data;
};

export default buildFeedData