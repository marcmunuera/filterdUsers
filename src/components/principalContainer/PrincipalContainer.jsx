import { use, useState } from 'react';
import { USERS } from '../../constants/users';
import UserCard from '../userCard/UserCard';
import ButtonCheck from '../buttonCheck/ButtonCheck';
import FilterByName from '../filerByName/FilterByName';

const PrincipalContainer = () => {
	const newUsers = [...USERS];
	const [users, setUsers] = useState(newUsers);
	return (
		<div>
			<p>Usuarios Activos</p>
			<ButtonCheck users={newUsers} setUsers={setUsers} />
			<FilterByName newUsers={newUsers} setUsers={setUsers} />

			{users.map(user => (
				<UserCard
					key={user.id}
					userImg={user.urlImg}
					userName={user.name}
					userStatus={user.status}
				/>
			))}
		</div>
	);
};

export default PrincipalContainer;
