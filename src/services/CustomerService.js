
class CustomerService {

    static id = 8;

    customers = [
        { id: 1, company: "Arctos inc", name: "Djole Djinic", dateOfRegistration: new Date() },
        { id: 2, company: "Canis DOO", name: "Kole Krcati", dateOfRegistration: new Date() },
        { id: 3, company: "Panthera & co", name: "Marko Merani", dateOfRegistration: new Date() },
        { id: 4, company: "Panthera & Panthera", name: "Konstantin Kelj", dateOfRegistration: new Date() },
        { id: 5, company: "Lynx United", name: "Rinoslav Rogonja", dateOfRegistration: new Date() },
        { id: 6, company: "Marin SZTR", name: "Rinoslav Rogonja", dateOfRegistration: new Date() },
        { id: 7, company: "Karin Privreda", name: "Rinoslav Rogonja", dateOfRegistration: new Date() }
    ]

    getAll() {
        return [...this.customers];
    }

    get(id) {
        return this.customers.find(x => x.id == id);
    }

    create(newCustomer) {
        const createdCustomer = { ...newCustomer, id: CustomerService.id };
        this.customers.push(createdCustomer);
        CustomerService.id++;
        return createdCustomer;
    }

    delete(id) {
        var updatedCustomers = [...this.customers];
        var indexToRemove = updatedCustomers.findIndex(x => x.id === id);
        if (indexToRemove > -1) {
            updatedCustomers.splice(indexToRemove, 1)
            this.customers = [...updatedCustomers];
        }
    }
}

export default new CustomerService();
