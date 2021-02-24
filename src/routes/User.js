/**
 * @api {get} /user/:id Request User information
 * @apiName GetUser
 * @apiGroup User
 *
 * @apiParam {String} id User's unique ID.
 *
 * @apiSuccess {String} status Status of response.
 * @apiSuccess {Object} data Object containing information/details of User.
 * @apiSuccess {String} data.id Unique ID of the User.
 * @apiSuccess {String} data.firstname Firstname of the User.
 * @apiSuccess {String} data.lastname  Lastname of the User.
 * @apiSuccess {String} data.email  Email of the User.
 */

 /**
 * @api {post} /user/ Create User information
 * @apiName CreateUser
 * @apiGroup User
 *
 * @apiParam {String} first name User's Firstname.
 * @apiParam {String} lastname User's Lastname.
 * @apiParam {String} email User's Email.
 * @apiParam {String} password User's Password.
 * @apiParam {String} user_type User's Type (Admin/User).
 *
 * @apiSuccess {String} firstname Firstname of the User.
 * @apiSuccess {String} lastname  Lastname of the User.
 */