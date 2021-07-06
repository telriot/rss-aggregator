// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import Parser from 'rss-parser';
import {Feed, FeedItem} from 'types'
import { FEEDS } from 'public/feeds';

const RSSParser = async (
	req: NextApiRequest,
	res: NextApiResponse
): Promise<void> => {
	const parser: Parser<Feed, FeedItem> = new Parser();
	try {
		const feeds = await Promise.allSettled(FEEDS.map(feed=> parser.parseURL(feed.RSSFeed)));		
		res.status(200).json({feeds});
	} catch (error) {
		res.status(500).json(error)
	}
}
export default RSSParser