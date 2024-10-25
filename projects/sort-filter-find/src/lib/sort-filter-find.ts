type sortType = "ASC" | "DESC";

/**
 * Class to perform simple operations on arrays of objects: Sort / Find / Filter.
 * 
 * @template T The type of objects contained in the array. Must be an object with properties.
 */
export class SortFilterFind<T extends object> {
  private data: Array<T> = [];
  private oneData: T | null = null;
  private typeSort: sortType = "ASC";
  private fieldName: keyof T;
  private value: string | number | boolean = "";

  /**
   * Constructor to initialize the class with data and sorting/filtering criteria.
   * 
   * @param {Array<T>} data - Array of objects to operate on.
   * @param {sortType} typeSort - The sort order, either 'ASC' for ascending or 'DESC' for descending.
   * @param {keyof T} fieldName - The key of the object property to perform operations on.
   * @param {string | number | boolean} [value=""] - The value to filter or search by.
   */
  constructor(
    data: Array<T>,
    typeSort: sortType,
    fieldName: keyof T,
    value: string | number | boolean = ""
  ) {
    this.data = data;
    this.typeSort = typeSort;
    this.fieldName = fieldName;
    this.value = value;
  }

  /**
   * Returns either the full array of data or the single object found by `find`.
   * 
   * @returns {T | T[] | null} - Returns the array of objects or a single object if found, otherwise null.
   */
  get valueData(): T | T[] | null {
    return this.data.length !== 0 ? this.data : this.oneData;
  }

  /**
   * Sorts the array of objects in ascending or descending order based on the provided field.
   * 
   * @returns {this | undefined} - Returns the current instance for chaining or undefined if the data is invalid.
   * 
   * @example
   * const sortFilter = new SortFilterFind([{ name: 'Alice', age: 30 }, { name: 'Bob', age: 25 }], "ASC", "age");
   * sortFilter.sort(); // [{ name: 'Bob', age: 25 }, { name: 'Alice', age: 30 }]
   */
  sort(): this | undefined {
    if (!Array.isArray(this.data) || this.data.length === 0) {
      return undefined;
    }

    const sortFactor = this.typeSort === "ASC" ? 1 : -1;

    if (this.fieldName) {
      this.data.sort((a, b) => {
        if (typeof a[this.fieldName] === "string" && typeof b[this.fieldName] === "string") {
          return sortFactor * (a[this.fieldName] as string).localeCompare(b[this.fieldName] as string);
        }

        if (typeof a[this.fieldName] === "number" && typeof b[this.fieldName] === "number") {
          return sortFactor * ((a[this.fieldName] as number) - (b[this.fieldName] as number));
        }

        return 0;
      });
    }

    return this;
  }

  /**
   * Filters the array of objects by the specified value in the provided field.
   * 
   * @returns {this | undefined} - Returns the current instance for chaining or undefined if the data is invalid.
   * 
   * @example
   * const sortFilter = new SortFilterFind([{ name: 'Alice', age: 30 }, { name: 'Bob', age: 25 }], "ASC", "name", "Bob");
   * sortFilter.filter(); // [{ name: 'Bob', age: 25 }]
   */
  filter(): this | undefined {
    if (!Array.isArray(this.data) || this.data.length === 0) {
      return undefined;
    }
    this.data = this.data.filter((element) => element[this.fieldName] === this.value);
    return this;
  }

  /**
   * Finds and retrieves the first object in the array that matches the provided value in the specified field.
   * 
   * @returns {this | undefined} - Returns the current instance for chaining or undefined if the data is invalid.
   * 
   * @example
   * const sortFilter = new SortFilterFind([{ name: 'Alice', age: 30 }, { name: 'Bob', age: 25 }], "ASC", "name", "Alice");
   * sortFilter.find(); // { name: 'Alice', age: 30 }
   */
  find(): this | undefined {
    if (!Array.isArray(this.data) || this.data.length === 0) {
      return undefined;
    }
    this.oneData = this.data.find((element) => element[this.fieldName] === this.value) ?? null;
    this.data = [];
    return this;
  }
}
