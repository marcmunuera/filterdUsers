import { useState } from 'react';
import { USERS } from '../../constants/users';

const ButtonCheck = ({ users, setUsers }) => {
	const [activo, setActivo] = useState(false);
	console.log(activo);
	console.log(users);

	return (
		<input
			type='checkbox'
			onChange={() => buttonChecked(activo, setActivo, users, setUsers)}
			checked={activo}
		/>
	);
};

const buttonChecked = (activo, setActivo, users, setUsers) => {
	const nuevoActivo = !activo;
	setActivo(nuevoActivo);
	if (nuevoActivo) {
		return setUsers(users.filter(user => user.status));
	} else {
		return setUsers(USERS);
	}
};

export default ButtonCheck;
