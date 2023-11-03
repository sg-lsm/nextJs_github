import fetch from 'isomorphic-unfetch';
import Link from 'next/link';
import { useState } from 'react';

const index = ({ user }) => {
	const name = user && user.name;
	return <div>{name}</div>;
};

const App = () => {
	const [username, setUsername] = useState();
	return (
		<div>
			<label>
				username
				<input value={username} onChange={e => setUsername(e.target.value)} />
			</label>
			<p> search to {username}'s git-hub</p>
			<Link id="search" href={`/users/${username}`}>
				<p>검색하기</p>
			</Link>
		</div>
	);
};

export const getServerSideProps = async () => {
	try {
		const res = await fetch(`https://api.github.com/users/sg-lsm`);
		if (res.status == 200) {
			const user = await res.json();
			console.log(user);
			return { props: { user } };
		}
		return { props: {} };
	} catch (e) {
		console.log(e);
		return { props: {} };
	}
};

export default App;
