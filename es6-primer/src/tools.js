/*var logger = function(message){
    console.log(message);
}

export var appName = "ES6 Review";

export var dummyFunction = function(){
    return "I am a dummy function";
}

export default logger;
*/

export const genericFunction = () => { 
    //declare an object literal with nested objects 
    let biodata = { 
        personalInformation : { 
            firstName : 'Pius', 
            lastName : 'Onobhayedo', 
            gender : 'Male', 
            religion : 'Christianity (Catholic)', 
            fathersName : 'John', 
            mothersName : 'Patricia' 
        }, 
        education : { 
            highestQualificationObtained : 'PhD', 
            institution : 'University of Navarra' 
        }, 
        occupation : 'University Lecturer', 
        skills : ['Programming', 'Teaching', 'Innovation','Talent management'], 
        interestsAndHobbies : ['Tennis', 'Soccer Leagues', 'Tech Innovation News'] 
    }; 

    //deconstruct firstName, lastName from the nested personalInformation object as well as occupation. 
    let {personalInformation : {firstName, lastName}, occupation} = biodata;//makes firstName, lastName and occupation directly available as variables within our functions.

    //deconstruct personalInformation and then the rest using the spread operator
    let {personalInformation, ...otherBiodata} = biodata;//makes personalInformation object directly available as a variable. The rest (using Spread operator) are made available as part of an object named otherBiodata

    //output data using a multiline string literal. We have embedded <br/> so that the browser will break the lines as well for us return `First name is ${firstName} and lastname is ${lastName}. The occupation is ${occupation}. A lot more data are available. For example: <br/><br/> 

}

