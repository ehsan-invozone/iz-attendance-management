/**
 * @api {get} /attendance/mark:id Check In/Check Out with User ID
 * @apiName CheckIn/CheckOut
 * @apiGroup Attendance
 *
 * @apiParam {String} id User's unique ID.
 *
 * @apiSuccess {Boolean} status User Checked In/Checked Out.
 * @apiSuccess {String} message Message stating User Checked In/Checked Out.
 */

 /**
 * @api {get} /attendance/ Get Attendance Between Dates
 * @apiName Get Attendance Between Dates
 * @apiGroup Attendance
 *
 * @apiParam {String} start_date Starting date from which attendance record are desired.
 * @apiParam {String} end_date Ending date to which attendance record are desired.
 *
 * @apiSuccess {String} attendance Attendance Record.
 */