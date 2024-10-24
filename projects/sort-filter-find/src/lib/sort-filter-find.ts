type sortType ="ASC"| "DESC";

/**
 * classe pour effectuer des operations simples sur les array : Sort / Find / Filter
 */

export class SortFilterFind<T> {
  private data : Array<T>=[];
  private oneData : T | null = null;
  private typeSort : sortType="ASC";
  private fieldName : keyof T = "" as keyof T;
  private value :  string | number | boolean ="";
  
  constructor(
    data: Array<T>,
    typeSort: sortType,
    fieldName: keyof T,
    value: string | number | boolean =""
) {
    this.data = data;
    this.typeSort = typeSort;
    this.fieldName = fieldName;
    this.value = value;
}

  get valueData() : T | T[] | null{
      return (this.data.length !==0)? this.data : this.oneData ; 
  }
  /**
   * sort : classe par ordre croissant ou decroissant
   * @returns T[] | undefined
   */
  sort() : this | undefined{ 

    if (!Array.isArray(this.data) || this.data.length === 0) {
        return undefined; 
      }
  
      const sortFactor = this.typeSort === "ASC" ? 1 : -1;
  
      this.data.sort((a, b) => {
        if (typeof a[this.fieldName] === "string" && typeof b[this.fieldName] === "string") {
          return sortFactor * (a[this.fieldName] as string).localeCompare(b[this.fieldName] as string);
        }
  
        if (typeof a[this.fieldName] === "number" && typeof b[this.fieldName] === "number") {
          return sortFactor * ((a[this.fieldName] as number) - (b[this.fieldName] as number));
        }
  
        return 0;
      });
  
      return this;
  }

  /**
   * filter : filtre generique
   * @returns T[] | undefined
   */
  filter() : this | undefined
  {
    if (!Array.isArray(this.data) || this.data.length === 0) {
        return undefined;
      }
      this.data = this.data.filter((element) => element[this.fieldName] === this.value);
      return this;
  }
  /**
   * find : recupere l'Objet T
   * @returns T | undefined | null
   */
  find() : this | undefined{
    if (!Array.isArray(this.data) || this.data.length === 0) {
        return undefined;
      }
      this.oneData = this.data.find((element)=> element[this.fieldName] === this.value) ?? null;
      this.data=[];
      return this;
  }

}