// Your code here

function createEmployeeRecord(employee_info) {
    const employeeObject = new Object();
    employeeObject.firstName = employee_info[0];
    employeeObject.familyName = employee_info[1];
    employeeObject.title = employee_info[2];
    employeeObject.payPerHour = employee_info[3];
    employeeObject.timeInEvents = [];
    employeeObject.timeOutEvents = [];
    return employeeObject
}

function createEmployeeRecords(arrays) {
    const array1 = arrays.map(createEmployeeRecord);
    return array1
}

function createTimeInEvent(employeeObject, timeStamp) {
    let dateSplit = timeStamp.split(' ');
    let timeDetails = new Object();
        timeDetails.type = "TimeIn";
        timeDetails.hour = parseInt(dateSplit[1]);
        timeDetails.date = dateSplit[0];
    
    employeeObject.timeInEvents.push(timeDetails)
    return employeeObject
}

function createTimeOutEvent(employeeObject, timeStamp) {
    let dateSplit = timeStamp.split(' ');
    let timeDetails = new Object();
        timeDetails.type = "TimeOut";
        timeDetails.hour = parseInt(dateSplit[1]);
        timeDetails.date = dateSplit[0];
    
    employeeObject.timeOutEvents.push(timeDetails)
    return employeeObject
}

function hoursWorkedOnDate(employeeObject, dateTime) {
    let clockIn = employeeObject.timeInEvents.find(function(d) {
       return d.date === dateTime
    })

    let clockOut = employeeObject.timeOutEvents.find(function(d) {
        return d.date === dateTime
     })
    let timeWorked = clockOut.hour - clockIn.hour;
    return timeWorked / 100;
}

function wagesEarnedOnDate(employeeObject, dateTime) {
    let hoursWorked = hoursWorkedOnDate(employeeObject, dateTime);

    return employeeObject.payPerHour * hoursWorked
}

function allWagesFor(employeeObject) {
    let datesWorked = employeeObject.timeOutEvents.map(dateTime => dateTime.date)

    return datesWorked.reduce(function(accumulator, dateWorked){
        return wagesEarnedOnDate(employeeObject, dateWorked) + accumulator
    }, 0);
}

function calculatePayroll(employeeArray) {
    let payRollTotal = employeeArray.reduce(function(accumulator, employeeObject) {
        return allWagesFor(employeeObject) + accumulator;
    }, 0);
    return payRollTotal
}

function findEmployeeByFirstName(employeeArray, name1) {
    let nameMatch =  employeeArray.find( function(n) {
        return n.firstName === name1
    })
    return nameMatch
}










    //let hoursWorked = employeeObject.timeOutEvents[0].hour - employeeObject.timeInEvents[0].hour;
    //let hoursWorked1 = hoursWorked / 100
    /*let dateNeeded = employeeObject.timeInEvents.find(function(d) {
        return d.date.result === dateTime})
        if (dateNeeded) {
            return employeeObject.timeOutEvents.hour - employeeObject.timeInEvents.hour
        }
    } */


    /*if (dateTime === employeeObject.timeInEvents.date) {
        hoursWorked = employeeObject.timeOutEvents.hour - employeeObject.timeInEvents.hour
        } 
    return hoursWorked */
