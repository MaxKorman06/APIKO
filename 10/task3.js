// Завдання 3

function printSeasonByMonth(month) 
{
 switch (month.toUpperCase()) {
     case "DECEMBER" || "JANUARY" || "FEBRUARY":
         return console.log("winter");
     case "MARCH" || "APRIL" || "MAY":
         return console.log("spring");
     case "JUNE" || "JULY" || "AUGUST":
         return console.log("summer");
     case "SEPTEMBER" || "OCTOBER" || "NOVEMBER":
         return console.log("autum");                                                                                                                                             
     default:
         break;
 }
}
 
 printSeasonByMonth("SEPTEMBER");
 printSeasonByMonth("NOVEMBER");
 printSeasonByMonth("JULY");
 printSeasonByMonth("APRIL");