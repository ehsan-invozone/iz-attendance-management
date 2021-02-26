/**
* @api {post} /login Login of User/Admin
* @apiName UserLogin
* @apiGroup Auth
* @apiParam {String} id User's unique ID.
* @apiParam {String} password User's password.
*  * @apiSuccessExample Success-Response:
*     {
*       "status": true,
*       "message": "User Logged in successfully",
*       "token": "tokenA33fdiotrdsoiasdnURIS32343="
*       "user":"{"firstname":"Ehsan","lastname":"Ali","user_type":"Admin","ID":"IZ-001"}"

*     }
 * @apiSuccess {Boolean} status Status of response.
 * @apiSuccess {String} message Message of response.
 * @apiSuccess {String} token Auth token of logged in user.
 * @apiSuccess {Object} data Object containing information/details of User.
 * @apiSuccess {String} data.id Unique ID of the User.
 * @apiSuccess {String} data.firstname Firstname of the User.
 * @apiSuccess {String} data.lastname  Lastname of the User.
 * @apiSuccess {String} data.email  Email of the User.
 * @apiSuccess {String} data.user_type  User Type of the User.
* @apiErrorExample Error-Response:
*     HTTP/1.1 404 Not Found
*     {
*       "error": "User Not Found"
*     }
*/