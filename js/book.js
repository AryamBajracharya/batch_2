document.addEventListener('DOMContentLoaded', () => {
    // Check if user is logged in
    if (localStorage.getItem('loggedIn') !== 'true') {
        window.location.href = 'login.html';
    }

    const bookList = document.getElementById('book-list');
    const searchBar = document.getElementById('search-bar');
    const addBookBtn = document.getElementById('add-book-btn');
    const newBookTitle = document.getElementById('new-book-title');
    const newBookAuthor = document.getElementById('new-book-author');
    const modal = document.getElementById('modal');
    const closeBtn = document.querySelector('.close-btn');
    const confirmBtn = document.getElementById('confirm-btn');
    const modalMessage = document.getElementById('modal-message');

    let books = [
        { title: '1984', author: 'George Orwell', favorite: false },
        { title: 'To Kill a Mockingbird', author: 'Harper Lee', favorite: false },
        { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', favorite: false }
    ];

    const renderBooks = (filter = '') => {
        bookList.innerHTML = '';
        books
            .filter(book => book.title.toLowerCase().includes(filter.toLowerCase()))
            .forEach((book, index) => {
                const bookItem = document.createElement('div');
                bookItem.className = 'book-item';
                bookItem.innerHTML = `
                    <span class="${book.favorite ? 'favorite' : ''}">${book.title} by ${book.author}</span>
                    <div>
                        <button onclick="toggleFavorite(${index})">${book.favorite ? 'Unfavorite' : 'Favorite'}</button>
                        <button onclick="removeBook(${index})">Remove</button>
                        <button onclick="buyBook('${book.title}', '${book.author}')">Buy</button>
                    </div>
                `;
                bookList.appendChild(bookItem);
            });
    };

    window.toggleFavorite = (index) => {
        books[index].favorite = !books[index].favorite;
        renderBooks(searchBar.value);
    };

    window.removeBook = (index) => {
        books.splice(index, 1);
        renderBooks(searchBar.value);
    };

    window.buyBook = (title, author) => {
        modalMessage.textContent = `Do you want to buy "${title}" by ${author}?`;
        modal.style.display = 'block';
    };

    addBookBtn.addEventListener('click', () => {
        const title = newBookTitle.value;
        const author = newBookAuthor.value;
        if (title && author) {
            books.push({ title, author, favorite: false });
            newBookTitle.value = '';
            newBookAuthor.value = '';
            renderBooks(searchBar.value);
        }
    });

    searchBar.addEventListener('input', (e) => {
        renderBooks(e.target.value);
    });

    closeBtn.onclick = () => {
        modal.style.display = 'none';
    };

    confirmBtn.onclick = () => {
        modalMessage.textContent = "Thank you for your purchase!";
        setTimeout(() => {
            modal.style.display = 'none';
        }, 2000);
    };

    window.onclick = (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    };

    renderBooks();
});
