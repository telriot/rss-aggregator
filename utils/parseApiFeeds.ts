import { Feed } from 'types';

/**
 * 
 * @param feeds Unparsed feeds from api call
 * @returns A parsed set of feeds ready to be rendered
 */

const parseApiFeeds = (feeds: Feed[]) : Feed[] =>
	feeds.map(({ status, value }) => ({
		status: status,
		value: { title: value.title, link: value.link, items: value.items }
	}));

export default parseApiFeeds