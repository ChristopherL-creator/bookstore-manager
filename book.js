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

class Book extends Pubblication{

    constructor (title, author, editor='Non disponibile', type='Non classificato', price = -1, copies = 0, pagesNumber = -1, yop = -1, discount = 0){
        super(title, editor, type, price, copies, discount, 10);
        this.author = author
        this.pagesNumber = pagesNumber;
        this.yop = yop;
    }

    // getPubblicPrice(){
    //     const pubblicPriceWithoutTax = super.getPubblicPriceWithoutTax();
    //     const tax = this.price * 10 / 100;
    //     const finalPrice = pubblicPriceWithoutTax + tax; 
    //     return finalPrice
    // }

    toString(){
        const book = super.toString() + '\n' +

            'Author: ' + this.author + '\n' +
            'Number of pages: ' + this.pagesNumber + '\n' +
            'Year of pubblication: ' + this.yop ;
        return book
    }
}

