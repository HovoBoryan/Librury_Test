// const generateId = (prefix) =>  prefix + Math.floor(Math.random() * 100000);

function generateId(prefix) {
    return prefix + Math.floor(Math.random() * 100000);
}


module.exports = {
    generateId,
}