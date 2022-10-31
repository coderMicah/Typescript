//when you get data from external source and u dont know if a property doesnt exist
//access nested objects , to avoid runtime errors when checking 


const fetchedData = {
    ID:"U1",
    name:'John',
    job:{title:"CEO", description:"My own Company"}
}

// JS way
// console.log(fetchedData.job && fetchedData.job.title);

// TS WAY
//Qn marks infront of every property checks if it exists if it does continues to yhe next property
console.log(fetchedData?.job?.title);
