import {makeAutoObservable} from "mobx";

export default class ShmotkiStore {
    constructor() {
        this._types = [
            {id: 1, name: "Dress"},
            {id: 2, name: "Jacket"}
        ]
        this._brands = [
            {id: 1, name: "Mass Market"},
            {id: 2, name: "Lux"}
        ]
        this._shmotki = [
            {id: 1, name: "Zara Jacket Oversize", price:250, img:""},
            {id: 1, name: "Zara Jeans Slim", price:500, img:""}
        ]
        makeAutoObservable(this);
    }

    setTypes(types) {
        this._types = types
    }
    setBrands(brands) {
        this._brands = brands
    }
    setShmotki(shmotki) {
        this._shmotki = shmotki
    }

    get types() {
        return this._types
    }
    get brands() {
        return this._brands
    }
    get shmotki() {
        return this._shmotki
    }
}
