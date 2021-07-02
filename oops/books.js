class BookLibrary {
getBookDetails(){
   let books = {
        "alchemist": { book_name: "alchemist", author: "rowling", price: 200, no_of_copies: 100, sold: 10 },
        "hamnet": { book_name: "hamnet", author: "maggie", price: 300, no_of_copies: 150, sold: 20 },
        "vanishing": { book_name: "vanishing", author: "bennet", price: 250, no_of_copies: 200, sold: 15 },
        "girlfriend": { book_name: "girlfriend", author: "brit", price: 100, no_of_copies: 50, sold: 5 },
    }
   return books;
}
    findBook(book_name) {
       let data=this.getBookDetails();
        if (book_name in data)
            console.log("Found");
        else
            console.log("Not Found");

    }

}

var book1=new BookLibrary();
book1.findBook("abc");




