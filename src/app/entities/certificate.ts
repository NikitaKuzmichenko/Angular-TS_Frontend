export interface Certificate{
    id? : number;
    copnany : string;
    itemName : string;
    categoryId : number[];
    creationDate : Date;
    expirationDate : Date;
    price : number;
    shortDesc : string;
    longDesc : string;
    img : string;
}