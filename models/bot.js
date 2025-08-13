const { model, Schema } = require('mongoose');

module.exports = model('Bots',
    new Schema({
        clientId: { type: String, required: true },
        ownerObj: { type: Object },
        botObj: { type: Object},
        summary: { type: String },
        tags: { type: Array },
        description: { type: String },
        support: { type: String },
        voteCount: { type: Number, default: 0 },
        votesArray: { type: Array },
        status: { type: String }
    })
);
