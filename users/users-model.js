db = require('../dbConfig.js');

module.exports = {
    add,
    find,
    findBy,
    findById 
}

function find() {
   return db('users').select("id", "username", "password")
}
function findBy(entry) {
    return db('users').where(entry).first();
}
function findById(id) {
    return db('users').where({ id: id }).first()

}
function add(user) {
    const id = db('users').insert(user, "id").first()
    return findById(id);

}