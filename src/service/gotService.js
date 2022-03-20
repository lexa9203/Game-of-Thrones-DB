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

    getAllCharacters = () => {
        return this.getResourse("/characters?page=5&pageSize=10");
    }

    getCharacter = (id) => {
        return this.getResourse(`/characters/${id}`);
    }

    getAllBooks = () => {
        return this.getResourse("/books");
    }

    getBook = (id) => {
        return this.getResourse(`/books/${id}`);
    }

    getAllHouses = () =>  {
        return this.getResourse("/houses");
    }

    getHouse = (id) => {
        return this.getResourse(`/houses/${id}`);
    }
}