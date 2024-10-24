/**
 * classe pour effectuer des operations simples sur les array : Sort / Find / Filter
 */
class SortFilterFind {
    constructor(data, typeSort, fieldName, value = "") {
        this.data = [];
        this.oneData = null;
        this.typeSort = "ASC";
        this.fieldName = "";
        this.value = "";
        this.data = data;
        this.typeSort = typeSort;
        this.fieldName = fieldName;
        this.value = value;
    }
    get valueData() {
        return (this.data.length !== 0) ? this.data : this.oneData;
    }
    /**
     * sort : classe par ordre croissant ou decroissant
     * @returns T[] | undefined
     */
    sort() {
        if (!Array.isArray(this.data) || this.data.length === 0) {
            return undefined;
        }
        const sortFactor = this.typeSort === "ASC" ? 1 : -1;
        this.data.sort((a, b) => {
            if (typeof a[this.fieldName] === "string" && typeof b[this.fieldName] === "string") {
                return sortFactor * a[this.fieldName].localeCompare(b[this.fieldName]);
            }
            if (typeof a[this.fieldName] === "number" && typeof b[this.fieldName] === "number") {
                return sortFactor * (a[this.fieldName] - b[this.fieldName]);
            }
            return 0;
        });
        return this;
    }
    /**
     * filter : filtre generique
     * @returns T[] | undefined
     */
    filter() {
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
    find() {
        if (!Array.isArray(this.data) || this.data.length === 0) {
            return undefined;
        }
        this.oneData = this.data.find((element) => element[this.fieldName] === this.value) ?? null;
        this.data = [];
        return this;
    }
}

/*
 * Public API Surface of sort-filter-find
 */

/**
 * Generated bundle index. Do not edit.
 */

export { SortFilterFind };
//# sourceMappingURL=sort-filter-find.mjs.map
