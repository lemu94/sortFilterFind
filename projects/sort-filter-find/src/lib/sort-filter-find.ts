type sortType ="ASC"| "DESC";
class ModelT{
    constructor(){}
    [key: string]: unknown
}
/**
 * classe pour effectuer des operations simples sur les array : Sort / Find / Filter
 */

export class SortFilterFind<T extends ModelT> {
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
   * @returns T[]
   */
  sort() : this{ 
      if(this.typeSort==="ASC")
      {
          this.data.sort((a,b)=> {

              if (typeof a[this.fieldName] === 'string' && typeof b[this.fieldName] === 'string') {
                  return (a[this.fieldName] as string).localeCompare(b[this.fieldName] as string);
              }
              
              if (typeof a[this.fieldName] === 'number' && typeof b[this.fieldName] === 'number') {
                  return  (a[this.fieldName] as number) - (b[this.fieldName] as number);
              }
              return 0;
  
          } )
      }

      if(this.typeSort==="DESC")
          {
              this.data.sort((a,b)=> {
  
                  if (typeof a[this.fieldName] === 'string' && typeof b[this.fieldName] === 'string') {
                      return (b[this.fieldName] as string).localeCompare(a[this.fieldName] as string);
                  }
                  
                  if (typeof a[this.fieldName] === 'number' && typeof b[this.fieldName] === 'number') {
                      return  (b[this.fieldName] as number) - (a[this.fieldName] as number);
                  }
                  return 0;
      
              } )
          }
      return this;
  }

  /**
   * filter : filtre generique
   * @returns T[]
   */
  filter() : this
  {
      this.data = this.data.filter((element) => element[this.fieldName] === this.value);
      return this;
  }
  /**
   * find : recupere l'Objet T
   * @returns T | null
   */
  find() : this{
      this.oneData = this.data.find((element)=> element[this.fieldName] === this.value) ?? null;
      this.data=[];
      return this;
  }

}