export function selectBook(book) {
	// SelectBok is an action creator it needs to return an action, an object with a type property
	return {
		type: 'BOOK_SELECTED',
		payload: book
	};
}
