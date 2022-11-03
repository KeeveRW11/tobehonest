const { Schema, model, Types } = require('mongoose');

const ThoughtSchema = new Schema (
    {
        thoughtTest: {
            type: String,
            required: true,

        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: CreatedAtVal => dateFormat(CreatedAtVal)
        }
    },
    {
        toJson: {
            getters: true
        }
    }
);

const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;