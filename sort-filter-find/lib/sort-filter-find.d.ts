type sortType = "ASC" | "DESC";
declare class ModelT {
    constructor();
    [key: string]: unknown;
}
/**
 * classe pour effectuer des operations simples sur les array : Sort / Find / Filter
 */
export declare class SortFilterFind<T extends ModelT> {
    private data;
    private oneData;
    private typeSort;
    private fieldName;
    private value;
    constructor(data: Array<T>, typeSort: sortType, fieldName: keyof T, value?: string | number | boolean);
    get valueData(): T | T[] | null;
    /**
     * sort : classe par ordre croissant ou decroissant
     * @returns T[] | undefined
     */
    sort(): this | undefined;
    /**
     * filter : filtre generique
     * @returns T[] | undefined
     */
    filter(): this | undefined;
    /**
     * find : recupere l'Objet T
     * @returns T | undefined | null
     */
    find(): this | undefined;
}
export {};
