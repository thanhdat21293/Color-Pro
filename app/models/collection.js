const elas = require('../../elastic/index');

class Collection {
    constructor(){
    }

    getAll() {
        return elas.searchAll ( "color", "collection" );
    }

    search ( term ) {
        return elas.search ("coffy", "location", term);
    }

    addCollection( collection ) {

    }

}

module.exports = new Collection();