const elas = require('../../elastic/index');

class Collection {
    constructor(){
    }

    getAll() {
        return elas.searchAll ( "color", "collection" );
    }

    getDetail(id) {
        return db.oneOrNone("SELECT * FROM coffy.location WHERE id_location = $1", id);
    }

    search (term) {
        return elas.search ("coffy", "location", term);
    }

}

module.exports = new Collection();