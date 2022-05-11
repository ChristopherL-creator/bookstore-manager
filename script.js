const book1 = new Book ('Pandora', ' Susan Stokes-Chapman', 'Neri pozza', 'Romance', 18.05, 16, 324, 2022, 10);

const book2 = new Book ('Fahreneight 451', 'Ray Bradbury', 'Mondadori', 'Romance', 12, 4, 166, 2016, 5);

const book3 = new Book ('Slam Dunk', 'Takehico Inoue', 'Planet-Manga', 'Manga-Spokon', 5.45, 14, 101, 1990, 2);

const book4 = new Book ('Il grande libro delle favole', 'Luis Sepùlveda', 'Guanda', 'Kids', 20, 2, 528, 2019, 10);

const book5 = new Book('Air', 'Michael Jordan', 'unknown', 'Sport', 11, 50, 316, 2021, 2);



///--------------------------------------------------------------------------------------------------------------------

const magazine1 = new Magazine ('Focus', 'Gruppo Mondadori', 'Monthly', 187, 'Science', 4.90, 250, 0, new Date(2022, 3, 21) );

 magazine1.releaseDate = new Date (2022, 4, 16);
  
const magazine2 = new Magazine ('Oggi', 'RCS Mediagroup', 'Weekly', 7, 'Variety', 2, 1000, 1, new Date(2022, 1, 17));

const magazine3 = new Magazine ('Shonen Jump', 'Shueisha', 'Weekly', 2122, 'Manga', 2, 2000000, 3, new Date (2017, 9, 5));

const magazine4 = new Magazine ('La settimana enigmistica', 'Francesco Baggi Sisini', 'Weekly', 4212, 'Game', 1.50, 100, 90, new Date(2012, 11, 15));

//-----------------------------------------------------------------------------------------------


let bookArray = [book1, book2, book3, book4, book5];

let finishedArray = [];

const bookTemplate = `
<div class="book-container border">
    <div class="title border"> 
        #TITLE 
    </div>
    <div class="type border"> 
        #TYPE 
    </div>
    <div class="copies border"> 
        #COPIES 
    </div>
    <button id='buy-button' class="button border">Acquista</button>
    <div class="author-editor-year border"> 
    
    </div>
    <div class="price-discount border"> 
    
    </div>
</div>
`

const finishedTemplate = `
<div class="book-container border">
    <div class="title border"> 
        #TITLE 
    </div>
    <div class="type border"> 
        #TYPE 
    </div>
    <div class="author-editor-year border"> 
    
    </div>
</div>
`

function displayBookWithTemplate(template, container, array) {
    
    const mainContainer = document.getElementById(container);

    mainContainer.innerHTML = '';

    for (let i = 0; i < array.length; i++) {
        const book = array[i];

        const div = document.createElement('div');

        const bookTemplate = template.replace('#TITLE', book.title)
                                     .replace('#TYPE', 'Type: ' + book.type)
                                     .replace('#COPIES', 'Copies in store: ' + book.copies);
    

        div.innerHTML = bookTemplate;
        mainContainer.appendChild(div);  

        const infoContainer = div.querySelector('.author-editor-year');
        const authorDiv = document.createElement('div');
        const author = document.createTextNode(book.author);
        authorDiv.classList.add('info-item')
        authorDiv.appendChild(author);
        infoContainer.appendChild(authorDiv);

        const editorDiv = document.createElement('div');
        const editor = document.createTextNode(book.editor);
        editorDiv.classList.add('info-item')
        editorDiv.appendChild(editor);
        infoContainer.appendChild(editorDiv);

        
        const yopDiv = document.createElement('div');
        const yop = document.createTextNode(book.yop);
        yopDiv.classList.add('info-item')
        yopDiv.appendChild(yop);
        infoContainer.appendChild(yopDiv);

        const priceContainer = div.querySelector(".price-discount");
        const priceDiv = document.createElement('div');
        const price = document.createTextNode(book.getPubblicPrice() + '€');
        priceDiv.classList.add('info-item')
        priceDiv.appendChild(price);
        priceContainer.appendChild(priceDiv); 

        const discountDiv = document.createElement('div');
        const discount = document.createTextNode(book.discount + '%');
        discountDiv.classList.add('price-item')
        discountDiv.appendChild(discount);
        priceContainer.appendChild(discount);


    }
}

displayBookWithTemplate(bookTemplate, 'book-list-container', bookArray) 

const buyButton = document.getElementById('buy-button'); 
   
buyButton.addEventListener('click', function(){
            bookArray.copies = parseInt(bookArray.copies) + 1; // `parseInt` converts the `value` from a string to a number
          }, false); 

function removeFinishedBooks(book){
    bookArray = bookArray.filter(b => b.copies === 0); 
    displayBookWithTemplate(bookTemplate, 'book-list-container', bookArray); 
    finishedArray.push(book); 
    displayBookWithTemplate(finishedTemplate, 'finished-container', finishedArray);
} 
 
// const libro1 = {title: 'odissea', copies: 5}; 
// const libro2 = {title: 'iliade', copies: 15}; 
// const libro3 = {title: 'i promessi sposi', copies: 3}; 

// let bookList = [libro1, libro2, libro3]; 

// function displayBooks() { 

//     const template = ` 
//         <span><strong> #TITLE </strong> </span> <br> 
//         <span> copie: #COPIES </span>      
//     ` 
    
//     const bookListContainer = document.getElementById('book-list-container'); 

//     bookListContainer.innerHTML = '';

//     for (const book of bookList) {
        
//         const bookContainer = document.createElement('div'); 

//         const replacedTemplate = template.replace('#TITLE', book.title).replace('#COPIES', book.copies); 

//         bookContainer.innerHTML = replacedTemplate; 

//         const button = document.createElement('button'); 
//         button.appendChild(document.createTextNode('vendi'));  
//         button.addEventListener('click', () => sellBook(book)); 
//         //  trasformo metodo in lambda, così posso passare tutti iparametri che voglio;
//         bookContainer.appendChild(button);

//         bookListContainer.appendChild(bookContainer)
//     }
// } 

// displayBooks(); 

// function sellBook(book) {
//     book.copies = book.copies - 1; 
//     if (book.copies === 0) { 
// //  creo nuovo array, in cui inserisco book con copie superiori a 0;
//         const tempArray = []; 
//         for (let i = 0; i < bookList.length; i++) {
//             const b = bookList[i];
//             if (b.copies > 0) {
//                 tempArray.push(b);
//             }
//         } 
//         bookList = tempArray;
//     }
//     displayBooks(); 
// //  citando funzione, forzo riscrittura;
// } 

