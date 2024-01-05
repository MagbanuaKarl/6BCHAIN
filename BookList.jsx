export default function BookList() {
    const books = ['MATH Book', 'SCIENCE Book', 'ENGLISH Book'];
    return(
        <div>
            <h3>Book List</h3>
            <ul>
            {books.map((book, index) => <li key={index}>{book}</li>)}
            </ul>
        </div>
    );
}