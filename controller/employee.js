const EmployeeController = {
  async addEmployee(req, res) {
    try {
      res.render("index");
    } catch (error) {}
  },
};

module.exports = EmployeeController;
