function findWidgets(obj, title: string) {
	let results = [];

	function traverse(currentObj) {
		if (typeof currentObj === 'object' && currentObj !== null) {
			for (const key in currentObj) {
				if (currentObj.hasOwnProperty(key)) {
					const value = currentObj[key];
					if (typeof value === 'object' && value !== null) {
						if (value.title && value.title.includes(title)) {
							results.push(value);
						}
						traverse(value); // Continue to traverse
					}
				}
			}
		}
	}

	traverse(obj);
	return results;
}

export default findWidgets;
