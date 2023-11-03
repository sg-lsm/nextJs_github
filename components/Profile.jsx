import { GoMail, GoOrganization, GoLink, GoLocation } from 'react-icons/go';
import css from 'styled-jsx/css';

const Profile = ({ user }) => {
	console.log('names : ' + user);
	if (!user) {
		return null;
	}
	return (
		<>
			<div className="profile-box">
				<div className="profile-image-wrapper">
					<img
						className="profile-image"
						src={user.avatar_url}
						alt={`${user.name} 프로필 이미지`}
					/>
				</div>
				<h2 className="profile-username">{user.name}</h2>
				<p className="profile-user-login">{user.login}</p>
				<p class="profile-user-bio">{user.bio ? user.bio : null}</p>
				<p className="profile-user-info">
					<GoLocation size={16} color="#6a737d" />
					<span className="profile-user-info-text">{user.location}</span>
				</p>
				<p className="profile-user-info">
					<GoMail size={16} color="#6a737d" />
					<span className="profile-user-info-text">
						{user.email ? user.email : 'ckdgml1227@gmail.com'}
					</span>
				</p>
				<p className="profile-user-info">
					<GoLink size={16} color="#6a737d" />
					<span className="profile-user-info-text">
						{user.blog ? user.blog : 'https://velog.io/@ckdgml1227'}
					</span>
				</p>
			</div>
			<style jsx>{style}</style>
		</>
	);
};

// const username = ({ user }) => {
// 	console.log(user);
// 	return (
// 		<>
// 			{user ? (
// 				<div>
// 					<h2>{user.name}</h2>
// 					<p className="user-bio">{user.bio}</p>
// 				</div>
// 			) : (
// 				<div>user index x</div>
// 			)}
// 			<style jsx>{style}</style>
// 		</>
// 	);
// };

const style = css`
	.profile-box {
		width: 25%;
		max-width: 272px;
		margin-right: 26px;
	}
	.profile-image-wrapper {
		width: 100%;
		border: 1px solid #e1e4e8;
	}
	.profile-image-wrapper .profile-image {
		display: block;
		width: 100%;
	}
	.prodile-uername {
		margin: 0;
		padding-top: 16px;
		font-size: 26px;
	}
	.profile-user-login {
		margin: 0;
		font-size: 20px;
	}
	.profile-user-info {
		display: flex;
		align-items: center;
		margin: 4px 0 0;
	}
	.profile-user-info-text {
		margin-left: 6px;
	}
	.profile-user-vio {
		margin: 0;
		padding-top: 16px;
		font-style: 14px;
	}
	h2 {
		margin-left: 20px;
	}
	.user-bio {
		margin-top: 12px;
		font-style: italic;
	}
`;

export default Profile;