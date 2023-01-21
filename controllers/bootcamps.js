// @desc   Get All bootcamps
// @route  GET /api/v1/bootcamps
// @access public
exports.getBootcamps = (req, res, next) => {
  res.status(200).json({ success: true, msg: "show all bootcamps" });
};
// @desc   Get single bootcamps
// @route  GET /api/v1/bootcamps/:id
// @access public
exports.getBootcamp = (req, res, next) => {
  res.status(200).json({ success: true, msg: `get bootcamp ${req.params.id}` });
};
// @desc   create new bootcamps
// @route  POST /api/v1/bootcamps/
// @access public
exports.createBootcamp = (req, res, next) => {
  res.status(200).json({ success: true, msg: "create new bootcamp" });
};

// @desc   update a bootcamps
// @route  PUT /api/v1/bootcamps/:id
// @access public
exports.updateBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `update bootcamp ${req.params.id}` });
};
// @desc   delete a bootcamps
// @route  DELETE /api/v1/bootcamps/:id
// @access public
exports.deleteBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `delete bootcamp ${req.params.id}` });
};
