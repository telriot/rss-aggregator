import React, { FC, useState } from 'react';
import { GetStaticProps } from 'next';
import LoadingView from 'components/LoadingView';
import RejectedView from 'components/RejectedView';
import FeedsView from 'components/FeedsView';
import useSWR from 'swr';
import fetcher from 'utils/fetcher';
import Title from 'components/Title';
import FilterSection from 'components/FilterSection';
import SearchBar from 'components/SearchBar';
import { useFilter } from 'contexts/filterContext';
import Parser from 'rss-parser';
import { Feed, FeedItem, APIResData } from 'types';
import { FEEDS } from 'public/feeds';
import buildFeedData from 'utils/buildFeedData';
import compare from 'utils/compareFeedUpdates';
import UpdateIndicator from 'components/UpdateIndicator';

interface SWRResponse {
	data?: { feeds: Feed[] };
	error?: unknown;
}
interface IndexSSRProps {
	data: APIResData;
	error: string;
}

// const MOCK_UPDATES: FeedItem[] = [
// 	{
// 		creator: 'Carlotta Garancini',
// 		title: 'Torte di compleanno per i bambini: 15 ricette semplici ed estive',
// 		link: 'https://www.lacucinaitaliana.it/news/cucina/torte-compleanno-bambini2-ricette-semplici-estive-preparazione/',
// 		pubDate: 'Fri, 09 Jul 2022 15:00:37 +0000',
// 		feed: 'La Cucina Italiana',
// 		feedIndex: 0
// 	},
// 	{
// 		creator: 'Carlotta Mortarini',
// 		title: 'Torte di compleanno per i vecchi: 15 ricette semplici ed estive',
// 		link: 'https://www.lacucinaitaliana.it/news/cucina/torte-compleanno-anziani-ricette-semplici-estive-preparazione/',
// 		pubDate: 'Fri, 09 Jul 2023 15:00:37 +0000',
// 		feed: 'La Cucina Italiana',
// 		feedIndex: 0
// 	}
// ];
export const getStaticProps: GetStaticProps = async (): Promise<{
	revalidate?: number;
	props: IndexSSRProps;
}> => {
	let data: APIResData = { feeds: [], feedItems: [] };
	let error: string;
	const parser: Parser<Feed, FeedItem> = new Parser();
	try {
		const feeds = (await Promise.allSettled(
			FEEDS.map((feed) => parser.parseURL(feed.RSSFeed))
		)) as Feed[];

		data = buildFeedData(feeds);
		console.log(data.feedItems[0]);
		error = '';
	} catch (err) {
		console.error(err);
		error = 'Something went wrong in server side fetching';
	}
	return {
		props: { data, error }, // will be passed to the page component as props
		revalidate: 600
	};
};

const Home: FC<IndexSSRProps> = ({ data, error }) => {
	const { data: updates }: SWRResponse = useSWR('/api/RSSParser', fetcher, {
		refreshInterval: 60000
	});
	//  ======================================== STATE
	const { state, dispatch } = useFilter();
	const [feedItems, setFeedItems] = useState<FeedItem[]>(data.feedItems);
	const [updateItems, setUpdateItems] = useState<FeedItem[]>([]);

	const onSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		dispatch({ type: 'textSearchSet', payload: e.target.value.toLowerCase() });
	};

	//  ======================================== HANDLERS
	const onFeedsUpdate = () => {
		setFeedItems((prev) => [...prev, ...updateItems]);
		setUpdateItems([]);
	};
	//  ======================================== EFFECTS
	React.useEffect(() => {
		if (data && updates) {
			const newItems = compare(
				data.feedItems,
				buildFeedData(updates.feeds).feedItems
			);
			setUpdateItems(newItems);
		}
	}, [updates, data]);

	//  ======================================== JSX
	return (
		<>
			<header className='sticky top-0 bg-white py-2'>
				<div className='container mx-auto px-3'>
					<Title />
				</div>
			</header>
			<div aria-label='app-container' className='container mx-auto px-3'>
				<section className='grid grid-cols-12 gap-3'>
					<aside className='col-span-3 flex flex-col'>
						<div className='sticky top-12'>
							<SearchBar
								className='shadow-md mb-3'
								onChange={onSearchChange}
								value={state.textSearch}
							/>
							<FilterSection />
						</div>
					</aside>
					<main className='col-start-4 col-span-9'>
						{error ? (
							<RejectedView />
						) : !data ? (
							<LoadingView />
						) : (
							<>
								<UpdateIndicator
									updateItems={updateItems}
									onUpdate={onFeedsUpdate}
								/>
								<FeedsView feedItems={feedItems} />
							</>
						)}
					</main>
				</section>
			</div>
		</>
	);
};

export default Home;
