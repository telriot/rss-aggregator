import { Feed, FeedItem } from 'types';

export const buildFeedItem = (index: number): FeedItem => ({
	title: 'A feed',
	pubDate: 'Mon, 12 July 2021',
	link: 'www.somelink.com',
	feedIndex: index
});

const buildFeed = (
	index: number,
	num: number,
	title = 'Test feed',
	link = 'www.test.com'
): Feed => ({
	status: 'active',
	value: {
		title,
		link,
		items: new Array(num).fill({ ...buildFeedItem(index) })
	}
});
export default buildFeed;
