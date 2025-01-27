import express from 'express'
import {requireSignIn, isAdmin} from '../middleware/authMiddleware.js'

import {
    createCategoryController,
    updateCategoryController,
    categoryController,
    singleCategoryController,
    deleteCategoryController
} from '../controllers/categoryController.js'
const router = express.Router()

//routes
//create-category
router.post('/create-category', requireSignIn, isAdmin, createCategoryController)

//update-category
router.put('/update-category/:id', requireSignIn, isAdmin, updateCategoryController)

//get All category
router.get('/get-category', categoryController)

//get Single category
router.get('/single-category/:slug', singleCategoryController)

// delete category
router.delete('/delete-category/:id', requireSignIn, isAdmin, deleteCategoryController)
export default router