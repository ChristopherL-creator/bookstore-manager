/// book

/// properties : 
/// tilte
/// author
/// editor
/// type
/// price
/// copies
/// pagesNumber
/// yop
///discount
///methods:

///toString()
///getPubblicPrice() => price + tax 10% - discount % + margin 30%

//-----------------------------------------------------------------------------------------------------------

class Book {

    constructor (title, author, editor, type, price, copies, pagesNumber, yop, discount){
        this.title = title;
        this.author = author
        this.editor = editor;
        this.type = type;
        this.price = price;
        this.copies = copies;
        this.pagesNumber = pagesNumber;
        this.yop = yop;
        this.discount = discount;
    }

    getPubblicPrice(){
    let tax = this.price * 10 / 100;
    let taxPrice = this.price + tax;
    let difference = taxPrice * this.discount / 100;
    let discountPrice = taxPrice - difference;
    let margin = taxPrice * 30 / 100;
    let finalPrice = discountPrice + margin; 
    return finalPrice
    }

    toString(){
        const book = 'BOOK' + '\n' +
                    'Title: ' + this.title + '\n' + 
                    'Author: ' + this.author + '\n' +
                    'Editor: ' + this.editor + '\n' +
                    'Type: ' + this.type + '\n' +
                    'Price: ' + this.getPubblicPrice() + ' €\n' +
                    'Copies in store: ' + this.copies + '\n' +
                    'Number of pages: ' + this.pagesNumber + '\n' +
                    'Year of pubblication: ' + this.yop + '\n' +
                    'Discount in %: ' + this.discount + '%\n';
                    return book
    }
}

