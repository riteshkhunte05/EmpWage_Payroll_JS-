//UC 1
const IS_ABSENT=0
let empCheck=Math.floor(Math.random()*10)%2;
if(empCheck==IS_ABSENT){
    console.log("Employee is Absent");
    
}else{
    console.log("Employee is present");
}
//UC 2
const IS_PART_TIME=1;
const IS_FULL_TIME=2;
const PART_TIME_HOURS=4;
const FULL_TIME_HOURS=8;
const WAGE_PER_HOUR=20;
let empHrs=0;
empCheck=Math.floor(Math.random()*10) % 3;
switch(empCheck){
    case IS_PART_TIME:
        empHrs=PART_TIME_HOURS;
        break;
    case IS_FULL_TIME:
            empHrs=FULL_TIME_HOURS;
            break;
    default:
        empHrs=0;
}
let empWage=empHrs*WAGE_PER_HOUR;
console.log("Emp Wage: "+empWage);
//UC 3
function getWorkingHours(empCheck){
    switch(empCheck){
        case IS_PART_TIME:
            return PART_TIME_HOURS;
            case IS_FULL_TIME:
                return FULL_TIME_HOURS;
                default:
                    return 0;
    }
}
 empHrs=0;
 empCheck=Math.floor(Math.random()*10) % 3;
empHrs=getWorkingHours(empCheck);
 empWage=empHrs*WAGE_PER_HOUR;
console.log("Emp Wage: "+empWage);
//UC 4
const Num_OF_Working_Days=2;
empHrs=0;
for(let day=0; day<Num_OF_Working_Days;day++){
    let empCheck=Math.floor(Math.random()*10) % 3;
    empHrs +=getWorkingHours(empCheck);
    }
     empWage=empHrs*WAGE_PER_HOUR;
     console.log("Total HRS:" +empHrs+ " Emp Wage: " +empWage);