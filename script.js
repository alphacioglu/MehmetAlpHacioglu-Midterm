async function getBooks(){
            try{
                const response = await fetch("https://upadhayay.github.io/db.json");
                const data = await response.json();
                
                const mybooks_div = document.querySelector(".mybooks");

                for (let book of data.books){
                    console.log(book)
                    
                    const single_book_div = document.createElement("div");
                    
                    single_book_div.innerHTML = `
                    <img class="book_img" src="image_paper.jpg" alt="Paper Image">
                    <div class="book_text">
                        <h2> Title: ${book.title}  </h2> 
                        <h3> Year: ${book.year} </h3>
                        <h3> Published:${book.published} </h3>
                    </div>`; 

                    single_book_div.classList.add('single_book')

                    mybooks_div.append(single_book_div)
                    
                }
            }
            catch(error){
                console.log("Error in fetch;")
            }
        }
        getBooks();
        console.log("This is fetch api example")