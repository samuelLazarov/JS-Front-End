// Write a function that determines whether based on the given age a person is: baby, child, teenager, adult, elder.
// The input comes as a single number parameter. The bounders are:
// ·	0-2 (age) – is a baby;   
// ·	3-13 (age) – is a child; 
// ·	14-19 (age) – is a teenager;
// ·	20-65 (age) – is an adult;
// ·	>=66 (age) – is an elder; 
// ·	In all other cases print – "out of bounds";
// The output should be printed to the console.

function determinePersonByAge(age){
    const types = ['baby', 'child', 'teenager', 'adult', 'elder'];
    
    const personType = (age >= 0 && age <=2) ? types[0] :
    (age >= 3 && age <=13) ? types[1] :
    (age >= 14 && age <=19) ? types[2] :
    (age >= 20 && age <=65) ? types[3] :
    (age >= 66 ) ? types[4] :
    'out of bounds'

    console.log(personType);
    
}

determinePersonByAge(-33);
determinePersonByAge(1);
determinePersonByAge(44);
determinePersonByAge(13);