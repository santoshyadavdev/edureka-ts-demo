export interface Address {
    addr1: string;
    addr2?: string;
    city: string;
    pin: string;
}

// export interface ExtendAddres {
//     address: Address;
//     country: string;
// }

let address: Address = {
    addr1 : 'Test',
    // addr2 : 'test',
    city : 'Test',
    pin : '4454654'
}

export interface Department {
    getDepartment() : string;
    addDepartment() : void;
}