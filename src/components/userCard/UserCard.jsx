const UserCard = ({ userImg, userName, userStatus }) => {
	return (
		<div>
			<img src={userImg} alt='' />
			<p>{userName}</p>
			<p>{userStatus}</p>
		</div>
	);
};

export default UserCard;
