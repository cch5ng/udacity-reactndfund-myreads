/**
 * @param {object} candidates list of candidates
 * @return {array} candidate ids
 * Helper function to get a list of candidate Ids
 */
export function dictBookIdToShelf(curBooks) {
	let dict = {};

	curBooks.forEach(book => {
	  dict[book.id] = book.shelf
	})
	return dict;
}