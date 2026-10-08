import { useState } from 'react';
import { USERS } from '../../constants/users';

const FilterByName = ({ newUsers, setUsers }) => {
	const filteredUsers = [...USERS];
	return (
		<>
			<input
				type='text'
				onChange={e => getFilteredName(e, filteredUsers, setUsers)}
			/>
		</>
	);
};

const getFilteredName = (e, filteredUsers, setUsers) => {
	if (!e.target.value) return setUsers([...USERS]);
	else {
		return setUsers(
			filteredUsers.filter(user =>
				user.name.toLowerCase().includes(e.target.value.toLowerCase())
			)
		);
	}
};
export default FilterByName;
