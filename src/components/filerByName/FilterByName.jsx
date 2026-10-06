import { useState } from 'react';

const FilterByName = ({ users, setUsers }) => {
	const filteredUsers = users;
	console.log(filteredUsers);
	return (
		<>
			<input
				type='text'
				onChange={e => getFilteredName(e, filteredUsers, users, setUsers)}
			/>
		</>
	);
};

const getFilteredName = (e, filteredUsers, users, setUsers) => {
	if (!filteredUsers) {
		return setUsers(users);
	} else {
		const newUsers = users.filter(user =>
			user.name.toLowerCase().includes(e.target.value.toLowerCase())
		);
		return setUsers(newUsers);
	}
};
export default FilterByName;
