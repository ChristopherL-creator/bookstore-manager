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

class Magazine extends Pubblication{

    constructor(title, editor, periodicity, release, type, price, copies, discount, releaseDate){
        super(title, editor, type, price, copies, discount, 20);
        this.periodicity = periodicity;
        this.release = release;
        this._releaseDate = releaseDate.getTime();
    }

    get releaseDate(){
        const date = new Date(this._releaseDate);
        return date;
    }

    set releaseDate(value){
        const time = value.getTime();
        this._releaseDate = time;
        
    }

    // getPubblicPrice(){
    //     const pubblicPriceWithoutTax = super.getPubblicPriceWithoutTax();
    //     const tax = this.price * 20 / 100;
    //     const finalPrice = pubblicPriceWithoutTax + tax; 
    //     return finalPrice
    //     }
    
        toString(){
            const magazine = super.toString() + '\n' +
                        'Periodicity: ' + this.periodicity + '\n' +
                        'Release number: ' + this.release + '\n' +
                        'Release date: ' + this.releaseDate.toString() + '\n';
                        return magazine
        }

}