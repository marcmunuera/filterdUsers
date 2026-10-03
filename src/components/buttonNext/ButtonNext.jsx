const ButtonNext = ({ counter, setCounter }) => {
	return <button onClick={() => nextUser(counter, setCounter)}>Next</button>;
};

const nextUser = (counter, setCounter) => {
	console.log(counter);
	return setCounter(counter + 1);
};

export default ButtonNext;
