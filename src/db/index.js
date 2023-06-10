'use strict'

const mongoose = require('mongoose');

const URI = `mongodb+srv://devmaster:devmaster@veigatech98.wwhs50q.mongodb.net/api_contas?retryWrites=true&w=majority`;

let db;

module.exports = {
    connect: async () => {
        db = await mongoose.connect(
            URI,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            }
        );
    },
    getDB: () => {
        return db;
    },
};