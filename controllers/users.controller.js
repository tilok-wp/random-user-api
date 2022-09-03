const users = require('../randomUserData.json');

module.exports.getAllUsers = (req, res, next) => {
  const { limit, page } = req.query;
  console.log(limit, page);
  // undefined.test();
  res.json(users.slice(0, limit));
};

//random user
module.exports.getRandomUser = (req, res, next) => {
  users.map(user => {
    const randomUser = Math.floor(Math.random() *
      users.length);
    res.json(users[randomUser]);
  })
};


//save user
module.exports.saveAUser = (req, res) => {
  console.log(req.query);
  users.push(req.body);
  res.send(users);
};

module.exports.getUserDetail = (req, res) => {
  const { id } = req.params;
  console.log(id);
  // const filter = {_id: id};
  const foundUser = users.find(User => User.id === Number(id));
  res.status(200).send({
    success: true,
    messages: "Success",
    data: foundUser
  });
  // res.status(500).send({
  //   success: false,
  //   error: "Internal server error."
  // });
};

module.exports.updateUser = (req, res) => {
  // const newData = req.body;
  const { id } = req.params;
  const filter = { _id: id };
  const newData = users.find(User => User.id === Number(id));
  newData.id = id;
  newData.name = req.body.name;
  res.send(newData);
};

module.exports.deleteUser = (req, res) => {
  const { id } = req.params;
  const filter = { _id: id };

  users = users.filter(User => User.id !== Number(id));

  res.send(users);
};