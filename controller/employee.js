const EmployeeController = {
  async addEmployee(req, res) {
    try {
      res.render("company/index");
    } catch (error) {}
  },
};

module.exports = EmployeeController;
