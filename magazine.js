/// Magazine

///properties:
/// Title
/// editor
/// periodicity
/// release
/// type
/// price
/// copies
/// discount
/// releaseDate

///methods:
///toString()
///getPubblicPrice => price + 20% - discount + 30%
//----------------------------------------------------------------------

class Magazine {

    constructor(title, editor, periodicity, release, type, price, copies, discount, releaseDate){
        this.title = title;
        this.editor = editor;
        this.periodicity = periodicity;
        this.release = release;
        this.type = type;
        this.price = price;
        this.copies = copies;
        this.discount = discount;
        this.releaseDate = releaseDate

    }

    getPubblicPrice(){
        let tax = this.price * 20 / 100;
        let taxPrice = this.price + tax;
        let difference = taxPrice * this.discount / 100;
        let discountPrice = taxPrice - difference;
        let margin = taxPrice * 30 / 100;
        let finalPrice = discountPrice + margin; 
        return finalPrice
        }
    
        toString(){
            const magazine = 'MAGAZINE \n' +
                        'Title: ' + this.title + '\n' + 
                        'Editor: ' + this.editor + '\n' +
                        'Periodicity: ' + this.periodicity + '\n' +
                        'Release number: ' + this.release + '\n' +
                        'Type: ' + this.type + '\n' +
                        'Price: ' + this.getPubblicPrice() + ' €\n' +
                        'Copies in store: ' + this.copies + '\n' +
                        'Discount in %: ' + this.discount + '%\n'+
                        'Release date: ' + this.releaseDate.toString() + '\n';
                        return magazine
        }

}