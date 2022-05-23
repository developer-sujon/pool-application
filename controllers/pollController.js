exports.pollGetController = (req, res, next) => {
  res.render("pool/create");
};

exports.pollPostController = (req, res, next) => {
  let { title, description, option } = req.body;

  option = option.map((opt) => {
    return {
      name: opt,
      vote: 0,
    };
  });
};
