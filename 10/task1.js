// Завдання 1
function printPowsOf2(number) 
    {
        if (typeof number === "number") 
        {
            for (let index = 1; index < number;  index *= 2) 
            {
                console.log(index);
            }
        }
        else
        {
            console.log("Введене значення не є числом!!!");
        }
    }
   printPowsOf2("302");
   printPowsOf2(null);
   printPowsOf2(128);
   printPowsOf2(60);