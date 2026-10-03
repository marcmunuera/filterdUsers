import { use, useState } from 'react';
import { USERS } from '../../constants/users';
import UserCard from '../userCard/UserCard';
import ButtonNext from '../buttonNext/ButtonNext';
import ButtonCheck from '../buttonCheck/ButtonCheck';

const PrincipalContainer = () => {
	const [counter, setCounter] = useState(0);

	const newUsers = USERS;
	const [users, setUsers] = useState(newUsers);
	return (
		<div>
			<p>Usuarios Activos</p>
			<ButtonCheck users={users} setUsers={setUsers} />
			{users.map(user => (
				<UserCard
					key={user.id}
					userImg={user.urlImg}
					userName={user.name}
					userStatus={user.status}
				/>
			))}
			<ButtonNext counter={counter} setCounter={setCounter} />
		</div>
	);
};

export default PrincipalContainer;
