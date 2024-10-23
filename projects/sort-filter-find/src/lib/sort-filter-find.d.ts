type sortType ="ASC"| "DESC";

export declare class SortFilterFind<T> {
    constructor(
        data: Array<T>,
        typeSort: sortType,
        fieldName: keyof T,
        value: string | number | boolean 
    );
    sort():  this | undefined;
  
    filter(): this | undefined;
  
    find(): this | undefined;
  }