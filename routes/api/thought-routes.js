const router = require('express').Router();

const {
    getAllThoughts,
    getThoughtById,
    createThought,
    updateThought,
    deleteThought
} = require('../../controllers');

router
    .route('/')
    .get(getAllThoughts)
    .post(createThought);


router
    .route('/:id')
    .put(updateThought)
    .delete(deleteThought);

router
    .route('/:thoughts/:thoughtId/reactions')
    .post(addReactions)
    .delete(deleteReaction);


module.exports = router;