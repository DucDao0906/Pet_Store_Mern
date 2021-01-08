const express = require('express');
const router = express.Router();

const CategoryController = require('../../app/controllers/CategoryController');
const checkPermission = require('../../app/middlewares/checkPermission');

// @route   GET api/categories
// @desc    Lấy tất cả danh mục
// @access  Public
router.get('/', CategoryController.getAll);

// @route   GET api/categories/deleted
// @desc    Lây tất cả danh mục soft deleted
// @access  Private
router.get('/deleted', checkPermission, CategoryController.getDeleted);

// @route   GET api/categories/:id
// @desc    Lấy danh mục theo id
// @access  Public
router.get('/:id', CategoryController.getById);

// @route   POST api/categories
// @desc    Tạo danh mục
// @access  Private
router.post('/', checkPermission, CategoryController.Add);

// @route   PUT api/categories
// @desc    Sửa danh mục
// @access  Private
router.put('/', checkPermission, CategoryController.editById);

// @route   DELETE api/categories/:id
// @desc    Soft delete danh mục (ẩn đi)
// @access  Private
router.delete('/:id', checkPermission, CategoryController.softDelete);

// @route   PATCH api/categories/:id/restore
// @desc    Phục hồi danh mục soft deleted
// @access  Private
router.patch('/:id/restore', checkPermission, CategoryController.restore);

module.exports = router;
