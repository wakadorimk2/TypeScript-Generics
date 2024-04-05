class Department {
  private employees: string[] = [];

  constructor(private id: string, public name: string) {
  }

  describe(this: Department) {
    console.log('Department: ' + this.name);
    console.log('Employees: ' + this.employees);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }
}

const accounting = new Department('D1', 'Accounting');
accounting.addEmployee('Max');
accounting.addEmployee('Manu');
accounting.describe();

