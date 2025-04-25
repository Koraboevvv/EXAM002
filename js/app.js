{
    // M-1
    let name = "John"
    let country = "USA"
    let result = `Im  ${name}.Im from ${country} `
    console.log(result);
    
}

{
    // M-2
    let user ={fname:"John",lname: "Doe"}
    let result = `${user.fname[0]}.${user.lname[0]}`
    console.log(result);
    
}

// {
//     // M-3
//     let car = {name: "Toyota", miles: 1} 
//     let result = "sxop"
//     if ( miles > 0 ) {
//         console.log(`${car.name} Your is old `);
//     } else{
//         console.log(`"${car.name}" Your is new `);
//     }
    
// }

{
    // M-4
    let sum = 0
    for (let i = 100; i <= 1000 ; i += 100) {
    sum += i    
    }
    console.log(sum);

}