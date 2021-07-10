export type Feed = {
	status: string;
	value: { title: string; link: string; items: FeedItem[] };
};
export type FeedItem = {
	title: string;
	author?: string;
	creator?: string;
	pubDate: Date | string;
	link: string;
	feed?: string;
	feedIndex: number;
};
export type FeedData = {
	title: string;
	link: string;
	RSSFeed: string;
	imgSrc: string;
	capitals: string;
	id: number;
};
interface APIResData {
	feeds: Feed[];
	feedItems: FeedItem[];
}
