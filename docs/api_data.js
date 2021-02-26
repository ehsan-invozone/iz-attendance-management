define({ "api": [
  {
    "type": "get",
    "url": "/attendance/mark:id",
    "title": "Check In/Check Out with User ID",
    "name": "CheckIn/CheckOut",
    "group": "Attendance",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>User's unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response-Check-In:",
          "content": "{\n  \"status\": true,\n  \"message\": \"Checked In successfully. You are late today\",\n  \"user\":\"{\"firstname\":\"Ehsan\",\"lastname\":\"Ali\",\"user_type\":\"Admin\",\"ID\":\"IZ-001\"}\"\n}",
          "type": "json"
        },
        {
          "title": "Success-Response-Check-Out:",
          "content": "{\n  \"status\": true,\n  \"message\": \"Working Hours Completed\",\n  \"hours-spent\": \"8 hours\",\n  \"user\":\"{\"firstname\":\"Ehsan\",\"lastname\":\"Ali\",\"user_type\":\"Admin\",\"ID\":\"IZ-001\"}\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>User Checked In/Checked Out.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Message stating User Checked In/Checked Out.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>Object containing information/details of User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.id",
            "description": "<p>Unique ID of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.firstname",
            "description": "<p>Firstname of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.lastname",
            "description": "<p>Lastname of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.email",
            "description": "<p>Email of the User.</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"status\": false\n  \"message\": \"User Not Found\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/Attendance.js",
    "groupTitle": "Attendance"
  },
  {
    "type": "get",
    "url": "/attendance/incomplete_hours",
    "title": "Get Records Between Dates of Users with incomplete hours",
    "name": "GetAttendanceBetweenDatesIncompleteHours",
    "group": "Attendance",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "start_date",
            "description": "<p>Starting date from which attendance records are desired.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "end_date",
            "description": "<p>Ending date to which attendance records are desired.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"status\": true,\n  \"message\": \"Records Fetched successfully\",\n  \"attendances\":\"[\n                     {\"firstname\":\"Ehsan\",\"lastname\":\"Ali\",\"ID\":\"IZ-001\",\"check_in\":\"03-03-2021 13:00\",\"check_out\":\"03-03-2021 05:30\", \"hours_spent\":\"4.5\"},\n                     {\"firstname\":\"Sheraz\",\"lastname\":\"Ahmad\",\"ID\":\"IZ-002\",\"check_in\":\"03-04-2021 12:30\",\"check_out\":\"03-04-2021 04:00\", \"hours_spent\":\"3.5\"},\n                     {\"firstname\":\"Ehsan\",\"lastname\":\"Ali\",\"ID\":\"IZ-001\",\"check_in\":\"03-04-2021 12:45\",\"check_out\":\"03-05-2021 03:45\", \"hours_spent\":\"3\"},\n                 ]\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>Success true/false.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Message stating User Checked In/Checked Out.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "attendances",
            "description": "<p>List of attendance records of a user.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "attendances.id",
            "description": "<p>Unique ID of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "attendances.firstname",
            "description": "<p>Firstname of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "attendances.lastname",
            "description": "<p>Lastname of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "attendances.email",
            "description": "<p>Email of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "attendances.check_in",
            "description": "<p>Check In time of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "attendances.check_out",
            "description": "<p>Check Out time of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "attendances.hours_spent",
            "description": "<p>Hours spent by the User. HTTP/1.1 404 Not Found { &quot;status&quot;: false &quot;message&quot;: &quot;Some Error Occurred&quot; }</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/routes/Attendance.js",
    "groupTitle": "Attendance"
  },
  {
    "type": "get",
    "url": "/attendance/latecomers",
    "title": "Get Attendance Between Dates of Late comers",
    "name": "GetAttendanceBetweenDatesLateComers",
    "group": "Attendance",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "start_date",
            "description": "<p>Starting date from which attendance records are desired.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "end_date",
            "description": "<p>Ending date to which attendance records are desired.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"status\": true,\n  \"message\": \"Records Fetched successfully\",\n  \"attendances\":\"[\n                     {\"firstname\":\"Ehsan\",\"lastname\":\"Ali\",\"ID\":\"IZ-001\",\"check_in\":\"03-03-2021 13:00\",\"check_out\":\"03-03-2021 06:30\", \"hours_spent\":\"6.5\"},\n                     {\"firstname\":\"Sheraz\",\"lastname\":\"Ahmad\",\"ID\":\"IZ-002\",\"check_in\":\"03-04-2021 12:30\",\"check_out\":\"03-04-2021 09:00\", \"hours_spent\":\"8.5\"},\n                     {\"firstname\":\"Ehsan\",\"lastname\":\"Ali\",\"ID\":\"IZ-001\",\"check_in\":\"03-04-2021 12:45\",\"check_out\":\"03-05-2021 06:30\", \"hours_spent\":\"10.5\"},\n                 ]\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>Success true/false.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Message stating User Checked In/Checked Out.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "attendances",
            "description": "<p>List of attendance records of a user.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "attendances.id",
            "description": "<p>Unique ID of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "attendances.firstname",
            "description": "<p>Firstname of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "attendances.lastname",
            "description": "<p>Lastname of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "attendances.email",
            "description": "<p>Email of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "attendances.check_in",
            "description": "<p>Check In time of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "attendances.check_out",
            "description": "<p>Check Out time of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "attendances.hours_spent",
            "description": "<p>Hours spent by the User. HTTP/1.1 404 Not Found { &quot;status&quot;: false &quot;message&quot;: &quot;Some Error Occurred&quot; }</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/routes/Attendance.js",
    "groupTitle": "Attendance"
  },
  {
    "type": "get",
    "url": "/attendance/",
    "title": "Get Attendance Between Dates of Specific employee",
    "name": "GetAttendanceBetweenDatesSpecificEmployee",
    "group": "Attendance",
    "permission": [
      {
        "name": "admin/user"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "start_date",
            "description": "<p>Starting date from which attendance records are desired.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "end_date",
            "description": "<p>Ending date to which attendance records are desired.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ID",
            "description": "<p>Unique ID of a user.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"status\": true,\n  \"message\": \"Records Fetched successfully\",\n  \"attendances\":\"[\n                     {\"firstname\":\"Ehsan\",\"lastname\":\"Ali\",\"ID\":\"IZ-001\",\"check_in\":\"03-03-2021 08:00\",\"check_out\":\"03-03-2021 06:30\", \"hours_spent\":\"10.5\"},\n                     {\"firstname\":\"Ehsan\",\"lastname\":\"Ali\",\"ID\":\"IZ-001\",\"check_in\":\"03-04-2021 08:00\",\"check_out\":\"03-04-2021 05:00\", \"hours_spent\":\"9\"},\n                     {\"firstname\":\"Ehsan\",\"lastname\":\"Ali\",\"ID\":\"IZ-001\",\"check_in\":\"03-05-2021 08:00\",\"check_out\":\"03-05-2021 06:30\", \"hours_spent\":\"10.5\"},\n                 ]\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>Success true/false.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Message stating User Checked In/Checked Out.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "attendances",
            "description": "<p>List of attendance records of a user.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "attendances.id",
            "description": "<p>Unique ID of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "attendances.firstname",
            "description": "<p>Firstname of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "attendances.lastname",
            "description": "<p>Lastname of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "attendances.email",
            "description": "<p>Email of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "attendances.check_in",
            "description": "<p>Check In time of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "attendances.check_out",
            "description": "<p>Check Out time of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "attendances.hours_spent",
            "description": "<p>Hours spent by the User.</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"status\": false\n  \"message\": \"Some Error Occurred\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/Attendance.js",
    "groupTitle": "Attendance"
  },
  {
    "type": "get",
    "url": "/attendance/date",
    "title": "Get Attendance on specific Date",
    "name": "GetAttendanceOnSpecificDate",
    "group": "Attendance",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "date",
            "description": "<p>Date on which attendance records are desired.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"status\": true,\n  \"message\": \"Records Fetched successfully\",\n  \"attendances\":\"[\n                    {\"firstname\":\"Ehsan\",\"lastname\":\"Ali\",\"ID\":\"IZ-001\",\"check_in\":\"03-03-2021 08:00\",\"check_out\":\"03-03-2021 06:30\", \"hours_spent\":\"10.5\"},\n                    {\"firstname\":\"Sheraz\",\"lastname\":\"Ahmad\",\"ID\":\"IZ-002\",\"check_in\":\"03-03-2021 10:00\",\"check_out\":\"03-03-2021 03:30\", \"hours_spent\":\"5.5\"}\n                 ]\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>Success true/false.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Message stating User Checked In/Checked Out.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "attendances",
            "description": "<p>List of attendance of all users.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "attendances.id",
            "description": "<p>Unique ID of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "attendances.firstname",
            "description": "<p>Firstname of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "attendances.lastname",
            "description": "<p>Lastname of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "attendances.email",
            "description": "<p>Email of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "attendances.check_in",
            "description": "<p>Check In time of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "attendances.check_out",
            "description": "<p>Check Out time of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "attendances.hours_spent",
            "description": "<p>Hours spent by the User.</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"status\": false\n  \"message\": \"Permission Denied\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/Attendance.js",
    "groupTitle": "Attendance"
  },
  {
    "type": "post",
    "url": "/login",
    "title": "Login of User/Admin",
    "name": "UserLogin",
    "group": "Auth",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>User's unique ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>User's password.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"status\": true,\n  \"message\": \"User Logged in successfully\",\n  \"token\": \"tokenA33fdiotrdsoiasdnURIS32343=\"\n  \"user\":\"{\"firstname\":\"Ehsan\",\"lastname\":\"Ali\",\"user_type\":\"Admin\",\"ID\":\"IZ-001\"}\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>Status of response.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Message of response.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Auth token of logged in user.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>Object containing information/details of User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.id",
            "description": "<p>Unique ID of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.firstname",
            "description": "<p>Firstname of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.lastname",
            "description": "<p>Lastname of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.email",
            "description": "<p>Email of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.user_type",
            "description": "<p>User Type of the User.</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"User Not Found\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/Auth.js",
    "groupTitle": "Auth"
  },
  {
    "type": "post",
    "url": "/user/",
    "title": "Create User information",
    "name": "CreateUser",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "first",
            "description": "<p>name User's Firstname.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lastname",
            "description": "<p>User's Lastname.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User's Email.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>User's Password.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user_type",
            "description": "<p>User's Type (Admin/User).</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "firstname",
            "description": "<p>Firstname of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lastname",
            "description": "<p>Lastname of the User.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/routes/User.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/user/:id",
    "title": "Request User information",
    "name": "GetUser",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>User's unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Status of response.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>Object containing information/details of User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.id",
            "description": "<p>Unique ID of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.firstname",
            "description": "<p>Firstname of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.lastname",
            "description": "<p>Lastname of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.email",
            "description": "<p>Email of the User.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/routes/User.js",
    "groupTitle": "User"
  }
] });
