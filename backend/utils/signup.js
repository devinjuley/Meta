const { check } = require('express-validator');
const { handleValidationErrors } = require('./validation');

const firstName = check('firstName')
    .notEmpty()
const lastName = check('lastName')
    .notEmpty()

const profileImageUrl = check('profileImageUrl')
    .notEmpty()
    .isURL({ require_protocol: false, require_host: false })
    .withMessage('Please provide a valid URL address.');
const backgroundImageUrl = check('backgroundImageUrl')
    .notEmpty()
    .isURL({ require_protocol: false, require_host: false })
    .withMessage('Please provide a valid URL address.');
