import fetch from 'isomorphic-unfetch';
import Profile from '../../components/Profile';

const name = ({ user }) => {
	if(!user){
		return null;
	}
	return (
		<>
			<Profile user={ user } />
		</>
	)
}

// const username = ({ user }) => {
// 	const username = user && user.name;
// 	return <div>{username}</div>;
// };

export const getServerSideProps = async ({ query }) => {
	const { name } = query;
	console.log("name : " + name);
	try {
		const res = await fetch(`https://api.github.com/users/${name}`);
		
			const user = await res.json();
			console.log("user : " + user)
			return { props: { user } };
		
	} catch (e) {
		console.log(e);
		return { props: {} };
	}
};

/*
export const getServerSideProps = async ({ query }) => {
	const { name } = query;
	try {
		const res = await fetch(`https://api.github.com/users/${name}`);
		if (res.status == 200) {
			const user = res.json();
			return { props: { user } };
		}
		return { props: {} };
	} catch (e) {
		console.log(e);
		return {};
	}
};
*/

/* 
name.getInitialProps = async ({ query }) => {
	const { name } = query;
	console.log(name);
	try {
		const res = await fetch(`https://api.github.com/users/${name}`);
		if (res.status == 200) {
			const user = await res.json();
			return { props: { user } };
		}
		return { props: {} };
	} catch (e) {
		console.log(e);
		return {};
	}
};
*/

export default name;
