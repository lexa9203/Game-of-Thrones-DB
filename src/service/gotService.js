export default class GotService{
    constructor() {
        this._APIBase = "https://www.anapioficeandfire.com/api"
    }

    async getResourse(url) {
        const res = await fetch(`${this._APIBase}${url}`);

        if (!res.ok) {
            throw new Error("MY-ERROR");
        }
        
        return await res.json();
    }

    getAllCharachters() {
        return this.getResourse("/characters");
    }

    getCharachter(id) {
        return this.getResourse(`/characters/${id}`);
    }

    getAllBooks() {
        return this.getResourse("/books");
    }

    getBook(id) {
        return this.getResourse(`/books/${id}`);
    }

    getAllHouses() {
        return this.getResourse("/houses");
    }

    getHouse(id) {
        return this.getResourse(`/houses/${id}`);
    }
}