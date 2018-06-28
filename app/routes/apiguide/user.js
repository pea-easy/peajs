
/**
  @apiGroup User
  @apiVersion 0.1.0
  @api {get} /user/getUser/:id   get user information

  @apiParam {Number} id  1-user id

  @apiSuccessExample Success-Response:
    HTTP/1.1 200 OK
  {
    msg:"success",
    "code": 200,

}


  @apiError code   err code
  @apiError msg   err description
  @apiErrorExample Error-Response:
      HTTP/1.1 200
      {
        code:500,
        msg: "system."
      }

 */


