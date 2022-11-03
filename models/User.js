const { Schema, model } = require('mongoose');

const UserSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            required: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            validate: {
                validator: function (v) {
                    return /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.test(v);
                },
                message: props => `${props.value} is not a valid email address!`
            }
        },
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Thought'
            }
        ],
        friends: [
            {type: Schema.Types.ObjectId,
                ref: 'User'
            }
        ]
    },
    {
        toJSON: {
            virtuals: true
        },
        id: false
    }
);

UserSchema.virtual('friendCount').get(function() {
    return  this.friends.reduce((total, friend) => total + friend.length + 1, 0)
});

thoughts: [
    {
        type: Schema.Types.ObjectId,
        ref: 'Thought'
    }
]

friends: [
    {type: Schema.Types.ObjectId,
        ref: 'User'
    }
]

const User = model('user', UserSchema);
const user = new User();
let error;

user.email = 'johndoe#email*com';
error = user.validateSync();
asserts.equal(error.errors['email'].message,
    'user.email.com is an invalid email address');

user.email = 'johndoe@email.com';
// Validation succeeds! email is defined
// and fits `user@email.com`
error = user.validateSync();
assert.equal(error, null);



module.exports = User;