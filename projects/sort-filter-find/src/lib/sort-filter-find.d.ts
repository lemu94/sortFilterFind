type sortType ="ASC"| "DESC";

export declare class SortFilterFind<T> {
    constructor(
        data: Array<T>,
        typeSort: sortType,
        fieldName: keyof T,
        value: string | number | boolean 
    );
    sort(): this;
  
    filter(): this;
  
    find(): this;
  }