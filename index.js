const employee = {name: "joe", streetAddress: "0011 nairobi" }

function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {...employee,[key]:value}

}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value
    return employee
}

function deleteFromEmployeeByKey(employee, key) {
    const employee1 = {...employee, key}
    return {employee1, delete:employee1.key}
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    employee[key] = undefined
    return employee
        
}