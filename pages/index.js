import { useState } from 'react';
import CoinList from '../components/CoinList';
import Layout from '../components/Layout';
import SearchBar from '../components/SearchBar';

export default function Home({ data }) {
	const [search, setSearch] = useState('');

	const allCoins = data.filter((coin) =>
		coin.name.toLowerCase().includes(search.toLocaleLowerCase())
	);
	const handleChange = (e) => {
		e.preventDefault();
		setSearch(e.target.value.toLowerCase());
	};

	return (
		<Layout>
			<div className='coin_app'>
				<SearchBar type='text' placeholder='search' onChange={handleChange} />
				<CoinList filteredCoins={allCoins} /> {/*Coins->CoinList */}
			</div>
		</Layout>
	);
}

export async function getServerSideProps() {
	const res = await fetch(
		'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false'
	);
	const data = await res.json();
	return { props: { data } };
}
