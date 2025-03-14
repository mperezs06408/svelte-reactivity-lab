function getLabelCapitalized(name: string) {
	const nameSplited = name.split(' ');

	const nameCapitalized = nameSplited.map((item) => item[0].toUpperCase() + item.slice(1));

	return nameCapitalized.join(' ');
}

export default getLabelCapitalized;
