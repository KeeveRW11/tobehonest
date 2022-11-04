const { Schema, model } = require('mongoose');
const ReactionSchema = require('./Reaction');
const dateFormat = require('../utils/dateFormat');

const ThoughtSchema = new Schema (
    {
        thoughtText: {
            type: String,
            required: true,
            minlength:1,
            maxlength: 280 
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: CreatedAtVal => dateFormat(CreatedAtVal)
        },
        username: {
            type: String,
            required: true
        }
        ,
        reactions: [ReactionSchema]
        
    },
    {
        toJson: {
            virtuals: true,
            getters: true
        },
        id: false
    }
);

ThoughtSchema.virtual('reactionCount').get (function() {
    return this.reactions.length;
});

const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;