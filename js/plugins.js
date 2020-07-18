/*global $, alert, console*/
$(function () {

    "use strict";

    let d = new Date();
    let month_name = ['jan','feb','mar','apr','ma','jun','jul','aug','sep','oct','nov','des']
    let month = d.getMonth(); //0-11
    let year = d.getFullYear(); //2020
    let first_date = month_name[month] + " " + 1 + " " + year;
    //
    let temp = new Date(first_date).toDateString();
    //
    let frist_day = temp.substring(0, 3);  
    let day_name = ['sun','mon','tue','wed','thu','fri','sat']; 
    let day_num = day_name.indexOf(first_date); // return value 1
    let days = new Date(year, month+1, 0).getDate();
    // tue sep 30 2020 .... > 


    
});
