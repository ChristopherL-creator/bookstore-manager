const book1 = new Book ('Pandora', ' Susan Stokes-Chapman', 'Neri pozza', 'Romance', 18.05, 16, 324, 2022, 10);

console.log(book1.toString())

const book2 = new Book ('Fahreneight 451', 'Ray Bradbury', 'Mondadori', 'Romance', 12, 4, 166, 2016, 5);

console.log(book2.toString())

const book3 = new Book ('Slam Dunk', 'Takehico Inoue', 'Planet-Manga', 'Manga-Spokon', 5.45, 14, 101, 1990, 2);

console.log(book3.toString())

const book4 = new Book ('Il grande libro delle favole', 'Luis Sepùlveda', 'Guanda', 'Kids', 20, 0, 528, 2019, 10);

console.log(book4.toString())

///--------------------------------------------------------------------------------------------------------------------

const magazine1 = new Magazine ('Focus', 'Gruppo Mondadori', 'Monthly', 187, 'Science', 4.90, 250, 0, new Date(2022, 3, 21) );

console.log(magazine1.toString())

const magazine2 = new Magazine ('Oggi', 'RCS Mediagroup', 'Weekly', 7, 'Variety', 2, 1000, 1, new Date(2022, 1, 17));

console.log(magazine2.toString())

const magazine3 = new Magazine ('Shonen Jump', 'Shueisha', 'Weekly', 2122, 'Manga', 2, 2000000, 3, new Date (2017, 9, 5));


console.log(magazine3.toString())

const magazine4 = new Magazine ('La settimana enigmistica', 'Francesco Baggi Sisini', 'Weekly', 4212, 'Game', 1.50, 100, 90, new Date(2012, 11, 15));

console.log(magazine4.toString())