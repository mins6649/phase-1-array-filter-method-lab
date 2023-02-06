const findMatching = (array, nameOfDriver) => {
    return array.filter(driver => driver.toLowerCase() === nameOfDriver.toLowerCase());
}

const fuzzyMatch = (array, nameOfDriver) => {
    return array.filter(driver => driver[0] === nameOfDriver[0]);
}

const matchName = (array, nameOfDriver) => {
    const newList = []; 
    for (const driver of array){
        if (driver.name === nameOfDriver){
            newList.push(driver);
        }   
    }
    return newList;
}