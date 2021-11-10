function method () {

    var person = document.getElementById('nameBox').value ;
    var age = document.getElementById('ageBox').value ;
    var salary = document.getElementById('totalMonthlySalaryBox').value ;

    if (age>25 && salary>=100000){
        p2.innerText = "Monthly Bonus is 20% of total Monthly Salary";
    }

    else if (age>30 && salary>=200000){
        p2.innerText = "Monthly Bonus is 30% of total Monthly Salary";

    }

    else if (age>35 && salary>=300000){
        p2.innerText = "Monthly Bonus is 35% of total Monthly Salary";

    }

    else {
        p2.innerText = "Monthly Bonus is 10% of total Monthly Salary";
    }

    





    p1.innerText = person + " YOUR TOTAL MONTHLY SALARY: " + salary; 

    document.getElementById('nameBox').value = '' ; 
    document.getElementById('ageBox').value = '' ; 
     document.getElementById('totalMonthlySalaryBox').value = '' ; 
}