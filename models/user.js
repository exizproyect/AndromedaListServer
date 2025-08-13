const { model, Schema } = require('mongoose');

module.exports = model('Users',
    new Schema({
        userId: { type: String, required: true },
        userObj: { type: Object },
        biografia: { type: Object},
    })
);
