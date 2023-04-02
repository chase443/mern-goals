const asyncHandler = require('express-async-handler')

// @desc Get goal
// @route GET /api/goals
// @access Private
const getGoal = asyncHandler(async (request, response) => {
    response.status(200).json({message: "Get goal gotten"})
})

// @desc Set goal
// @route POST /api/goals
// @access Private
const setGoal = asyncHandler(async (request, response) => {
    console.log(request.body)
    if(!request.body.text) {
        response.status(400)
        throw new Error("please add a text field")
    }
    response.status(200).json({message: `Set goal setted`})
})

// @desc Update goal
// @route POST /api/goals
// @access Private
const updateGoal = asyncHandler(async (request, response) => {
    response.status(200).json({message: `Update goal ${request.params.id}`})
})

// @desc Delete goal
// @route DELETE /api/goals
// @access Private
const deleteGoal = asyncHandler(async (request, response) => {
    response.status(200).json({message: `Delete goal ${request.params.id}`})
})

module.exports = {
    getGoal,
    setGoal,
    updateGoal,
    deleteGoal,
}