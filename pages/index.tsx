import React, {FC, useState} from 'react';
import LoadingView from 'components/LoadingView';
import RejectedView from 'components/RejectedView';
import FeedsView from 'components/FeedsView';
import useSWR from 'swr';
import fetcher from 'utils/fetcher';
import { Feed } from 'types';
import Title from 'components/Title';
import FilterSection from 'components/FilterSection';
import SearchBar from 'components/SearchBar';
import { useFilter } from 'contexts/filterContext';
interface SWRResponse {
	data?: { feeds: Feed[] };
	error?: unknown;
}

const Home: FC = () => {
	const { data, error }: SWRResponse = useSWR('/api/RSSParser', fetcher);
	console.log(data);

	//  ======================================== STATE
	const {state, dispatch} = useFilter()
	const onSearchChange = (e:React.ChangeEvent<HTMLInputElement>) => {
		dispatch({type:'textSearchSet', payload: e.target.value})
	}

    //  ======================================== HANDLERS

	return (
		<div aria-label='app-container' className='container mx-auto'>
			<header>
				<Title />
			</header>
			<section className='grid grid-cols-12 gap-3'>
				<aside className='col-span-3 flex flex-col'>
					<SearchBar className='shadow-md mb-3' onChange={onSearchChange} value={state.textSearch}/>
					<FilterSection />
				</aside>
				<main className='col-start-4 col-span-9'>
					{error ? (
						<RejectedView />
					) : !data ? (
						<LoadingView />
					) : (
						<FeedsView feeds={data.feeds} />
					)}
				</main>
			</section>
		</div>
	);
};

export default Home;
