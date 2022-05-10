class Pubblication {

    constructor(title, editor, type, price, copies, discount, tax) {
        this.title = title;
        this.editor = editor;
        this.type = type;
        this.price = price;
        this.copies = copies;
        this.discount = discount;
        this.tax = tax
    }


    toString() {
        const pubblicationString = 
            'Title: ' + this.title + '\n' +
            'Editor: ' + this.editor + '\n' +
            'Type: ' + this.type + '\n' +
            'Price: ' + this.getPubblicPrice() + '€' + '\n' +
            'Copies in store: ' + this.copies + '\n' +
            'Discount in %: ' + this.discount + '%' ;
        return pubblicationString
    }

    getPubblicPrice(){
        const discount = this.price * this.discount /100 ;
        const margin = this.price * 30 / 100;
        const tax = this.price * this.tax /100;
        const pubblicPrice = this.price - discount + margin + tax
        const roundedPubblicPrice = Math.round(pubblicPrice, 2)
        return roundedPubblicPrice
    }

    static round(number, decimalPlace){             /// Le funzioni si possono dichiarare statiche poichè non hanno nessun "This.", quindi non variano per l'oggetto
        const roundString = number.toFixed(decimalPlace);
        const roundNumber = parseFloat(roundString);
        return roundNumber;
    }
}
