/**
 * @api {get} /attendance/mark:id Check In/Check Out with User ID
 * @apiName CheckIn/CheckOut
 * @apiGroup Attendance
 *
 * @apiParam {String} id User's unique ID.
 *  * @apiSuccessExample Success-Response-Check-In:
 *     {
 *       "status": true,
 *       "message": "Checked In successfully. You are late today",
 *       "user":"{"firstname":"Ehsan","lastname":"Ali","user_type":"Admin","ID":"IZ-001"}"
 *     }
 *
 *  * @apiSuccessExample Success-Response-Check-Out:
 *     {
 *       "status": true,
 *       "message": "Working Hours Completed",
 *       "hours-spent": "8 hours",
 *       "user":"{"firstname":"Ehsan","lastname":"Ali","user_type":"Admin","ID":"IZ-001"}"
 *     }
 *
 * @apiSuccess {Boolean} status User Checked In/Checked Out.
 * @apiSuccess {String} message Message stating User Checked In/Checked Out.
 * @apiSuccess {Object} data Object containing information/details of User.
 * @apiSuccess {String} data.id Unique ID of the User.
 * @apiSuccess {String} data.firstname Firstname of the User.
 * @apiSuccess {String} data.lastname  Lastname of the User.
 * @apiSuccess {String} data.email  Email of the User.
 * 
 * @apiErrorExample Error-Response:
*     HTTP/1.1 404 Not Found
*     {
*       "status": false
*       "message": "User Not Found"
*     }
*/


 /**
 * @api {get} /attendance/date Get Attendance on specific Date
 * @apiName GetAttendanceOnSpecificDate
 * @apiGroup Attendance
 * @apiPermission admin
 *
 * @apiParam {String} date Date on which attendance records are desired.
 *  * @apiSuccessExample Success-Response:
 *     {
 *       "status": true,
 *       "message": "Records Fetched successfully",
 *       "attendances":"[
 *                         {"firstname":"Ehsan","lastname":"Ali","ID":"IZ-001","check_in":"03-03-2021 08:00","check_out":"03-03-2021 06:30", "hours_spent":"10.5"},
 *                         {"firstname":"Sheraz","lastname":"Ahmad","ID":"IZ-002","check_in":"03-03-2021 10:00","check_out":"03-03-2021 03:30", "hours_spent":"5.5"}
 *                      ]"
 *     }
 *
 * @apiSuccess {Boolean} status Success true/false.
 * @apiSuccess {String} message Message stating User Checked In/Checked Out.
 * @apiSuccess {Object[]} attendances List of attendance of all users.
 * @apiSuccess {String} attendances.id Unique ID of the User.
 * @apiSuccess {String} attendances.firstname Firstname of the User.
 * @apiSuccess {String} attendances.lastname  Lastname of the User.
 * @apiSuccess {String} attendances.email  Email of the User.
 * @apiSuccess {String} attendances.check_in  Check In time of the User.
 * @apiSuccess {String} attendances.check_out  Check Out time of the User.
 * @apiSuccess {String} attendances.hours_spent  Hours spent by the User.
 * @apiErrorExample Error-Response:
*     HTTP/1.1 404 Not Found
*     {
*       "status": false
*       "message": "Permission Denied"
*     }
*/

  /**
 * @api {get} /attendance/ Get Attendance Between Dates of Specific employee
 * @apiName GetAttendanceBetweenDatesSpecificEmployee
 * @apiGroup Attendance
 * @apiPermission admin/user
 *
 * @apiParam {String} start_date Starting date from which attendance records are desired.
 * @apiParam {String} end_date Ending date to which attendance records are desired.
 * @apiParam {String} ID Unique ID of a user.
 *  * @apiSuccessExample Success-Response:
 *     {
 *       "status": true,
 *       "message": "Records Fetched successfully",
 *       "attendances":"[
 *                          {"firstname":"Ehsan","lastname":"Ali","ID":"IZ-001","check_in":"03-03-2021 08:00","check_out":"03-03-2021 06:30", "hours_spent":"10.5"},
 *                          {"firstname":"Ehsan","lastname":"Ali","ID":"IZ-001","check_in":"03-04-2021 08:00","check_out":"03-04-2021 05:00", "hours_spent":"9"},
 *                          {"firstname":"Ehsan","lastname":"Ali","ID":"IZ-001","check_in":"03-05-2021 08:00","check_out":"03-05-2021 06:30", "hours_spent":"10.5"},
 *                      ]"
 *     }
 *
 * @apiSuccess {Boolean} status Success true/false.
 * @apiSuccess {String} message Message stating User Checked In/Checked Out.
 * @apiSuccess {Object[]} attendances List of attendance records of a user.
 * @apiSuccess {String} attendances.id Unique ID of the User.
 * @apiSuccess {String} attendances.firstname Firstname of the User.
 * @apiSuccess {String} attendances.lastname  Lastname of the User.
 * @apiSuccess {String} attendances.email  Email of the User.
 * @apiSuccess {String} attendances.check_in  Check In time of the User.
 * @apiSuccess {String} attendances.check_out  Check Out time of the User.
 * @apiSuccess {String} attendances.hours_spent  Hours spent by the User.
 * @apiErrorExample Error-Response:
*     HTTP/1.1 404 Not Found
*     {
*       "status": false
*       "message": "Some Error Occurred"
*     }
*/

  /**
 * @api {get} /attendance/latecomers Get Attendance Between Dates of Late comers
 * @apiName GetAttendanceBetweenDatesLateComers
 * @apiGroup Attendance
 * @apiPermission admin
 *
 * @apiParam {String} start_date Starting date from which attendance records are desired.
 * @apiParam {String} end_date Ending date to which attendance records are desired.
 *  * @apiSuccessExample Success-Response:
 *     {
 *       "status": true,
 *       "message": "Records Fetched successfully",
 *       "attendances":"[
 *                          {"firstname":"Ehsan","lastname":"Ali","ID":"IZ-001","check_in":"03-03-2021 13:00","check_out":"03-03-2021 06:30", "hours_spent":"6.5"},
 *                          {"firstname":"Sheraz","lastname":"Ahmad","ID":"IZ-002","check_in":"03-04-2021 12:30","check_out":"03-04-2021 09:00", "hours_spent":"8.5"},
 *                          {"firstname":"Ehsan","lastname":"Ali","ID":"IZ-001","check_in":"03-04-2021 12:45","check_out":"03-05-2021 06:30", "hours_spent":"10.5"},
 *                      ]"
 *     }
 *
 * @apiSuccess {Boolean} status Success true/false.
 * @apiSuccess {String} message Message stating User Checked In/Checked Out.
 * @apiSuccess {Object[]} attendances List of attendance records of a user.
 * @apiSuccess {String} attendances.id Unique ID of the User.
 * @apiSuccess {String} attendances.firstname Firstname of the User.
 * @apiSuccess {String} attendances.lastname  Lastname of the User.
 * @apiSuccess {String} attendances.email  Email of the User.
 * @apiSuccess {String} attendances.check_in  Check In time of the User.
 * @apiSuccess {String} attendances.check_out  Check Out time of the User.
 * @apiSuccess {String} attendances.hours_spent  Hours spent by the User.
*     HTTP/1.1 404 Not Found
*     {
*       "status": false
*       "message": "Some Error Occurred"
*     }
 */

  /**
 * @api {get} /attendance/incomplete_hours Get Records Between Dates of Users with incomplete hours
 * @apiName GetAttendanceBetweenDatesIncompleteHours
 * @apiGroup Attendance
 * @apiPermission admin
 *
 * @apiParam {String} start_date Starting date from which attendance records are desired.
 * @apiParam {String} end_date Ending date to which attendance records are desired.
 *  * @apiSuccessExample Success-Response:
 *     {
 *       "status": true,
 *       "message": "Records Fetched successfully",
 *       "attendances":"[
 *                          {"firstname":"Ehsan","lastname":"Ali","ID":"IZ-001","check_in":"03-03-2021 13:00","check_out":"03-03-2021 05:30", "hours_spent":"4.5"},
 *                          {"firstname":"Sheraz","lastname":"Ahmad","ID":"IZ-002","check_in":"03-04-2021 12:30","check_out":"03-04-2021 04:00", "hours_spent":"3.5"},
 *                          {"firstname":"Ehsan","lastname":"Ali","ID":"IZ-001","check_in":"03-04-2021 12:45","check_out":"03-05-2021 03:45", "hours_spent":"3"},
 *                      ]"
 *     }
 *
 * @apiSuccess {Boolean} status Success true/false.
 * @apiSuccess {String} message Message stating User Checked In/Checked Out.
 * @apiSuccess {Object[]} attendances List of attendance records of a user.
 * @apiSuccess {String} attendances.id Unique ID of the User.
 * @apiSuccess {String} attendances.firstname Firstname of the User.
 * @apiSuccess {String} attendances.lastname  Lastname of the User.
 * @apiSuccess {String} attendances.email  Email of the User.
 * @apiSuccess {String} attendances.check_in  Check In time of the User.
 * @apiSuccess {String} attendances.check_out  Check Out time of the User.
 * @apiSuccess {String} attendances.hours_spent  Hours spent by the User.
*     HTTP/1.1 404 Not Found
*     {
*       "status": false
*       "message": "Some Error Occurred"
*     }
 */