import React, { FC, useState } from 'react';
import { GetStaticProps } from 'next';
import LoadingView from 'components/LoadingView';
import RejectedView from 'components/RejectedView';
import FeedsView from 'components/FeedsView';
import useSWR from 'swr';
import fetcher from 'utils/fetcher';
import FilterSection, { FilterSectionPopup } from 'components/FilterSection';
import Header from 'components/layout/Header';
import { useFilter } from 'contexts/filterContext';
import Parser from 'rss-parser';
import { Feed, FeedItem, APIResData } from 'types';
import { FEEDS } from 'public/feeds';
import buildFeedData from 'utils/buildFeedData';
import compare from 'utils/compareFeedUpdates';
import UpdateIndicator from 'components/UpdateIndicator';
import clsx from 'clsx';
import { useMediaQuery } from 'react-responsive';

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
	//  ======================================== HOOKS
	const { data: updates }: SWRResponse = useSWR('/api/RSSParser', fetcher, {
		refreshInterval: 60000
	});
	const isMd = useMediaQuery({ query: '(min-width: 768px)' });

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
				feedItems,
				buildFeedData(updates.feeds).feedItems
			);
			setUpdateItems(newItems);
		}
	}, [updates, data]);

	//  ======================================== JSX
	return (
		<>
			<Header />
			<div aria-label='app-container' className='container mx-auto px-3'>
				<section className={clsx('md:grid md:grid-cols-12 md:gap-3')}>
					<aside className='md:col-span-3 flex flex-col'>
						{isMd ? (
							<div className='md:sticky md:top-24'>
								<div className='pt-6 mb-2 text-xl font font-display'>Feeds</div>{' '}
								<FilterSection />
							</div>
						) : (
							<FilterSectionPopup />
						)}
					</aside>
					<main className='md:col-start-4 md:col-span-9 pt-4 md:pt-6'>
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
