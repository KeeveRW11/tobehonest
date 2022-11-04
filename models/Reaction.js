const { Schema, Types } = require('mongoose');

const ReactionSchema = new Schema (
    {
        reactionId: {
            // type: Schema.Types.ObjectId,
            // default: () => Types.ObjectId(),
            type: Types.ObjectId,
            default: new Types.ObjectId()
        },
        reactionBody: {
            type: String,
            required: true,
            maxlength: 280
        },
        username: {
            type: String,
            required: true
        },    
        createdAt: {
            type: Date,
            default: Date.now,
            get: CreatedAtVal => dateFormat(CreatedAtVal)
        }, 
    },
    {
        toJson: {
            // virtuals: true,
            getters: true
        },
        id: false
    }
);

const Reaction = ('Reaction', ReactionSchema);


module.exports = Reaction;