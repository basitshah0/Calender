import inquirer from "inquirer";
console.log("\n\t \t <<<<========== < WELCOME TO BASIT CALENDER >===========>>>> \n ");
let result = await inquirer.prompt([
    {
        name: "calander2024",
        type: "list",
        message: "Select Your month",
        choices: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", "Quit"]
    }
]);
if (result.calander2024 === "January") {
    console.log(" \n \t \t \t<<<<================< JANUARY 2024 >============>>>>");
    console.log(" \t \t \t<<<<   Sun   Mon   Tue   Wen   Thu   Fri   Sat  >>>>");
    console.log(" \t \t \t<<<<          1     2     3     4     5     6   >>>>");
    console.log(" \t \t \t<<<<    7     8     9    10     11    12    13  >>>>");
    console.log(" \t \t \t<<<<   14    15     16   17     18    19    20  >>>>");
    console.log(" \t \t \t<<<<   21    22     23   24     25    26    27  >>>>");
    console.log(" \t \t \t<<<<   28    29     30   31                     >>>>");
    console.log(" \t \t \t<<<<============================================>>>>");
}
else if (result.calander2024 === "February") {
    console.log("\n \t \t \t<<<<===============< FEBRUARY 2024 >============>>>>");
    console.log("\t \t \t<<<<   Sun   Mon   Tue   Wen   Thu   Fri   Sat  >>>>");
    console.log("\t \t \t<<<<                            1     2     3   >>>>");
    console.log("\t \t \t<<<<    4     5     6     7     8     9     10  >>>>");
    console.log("\t \t \t<<<<   11    12    13    14    15    16     17  >>>>");
    console.log("\t \t \t<<<<   18    19    20    21    22    23     24  >>>>");
    console.log("\t \t \t<<<<   25    26    27    28    29               >>>>");
    console.log("\t \t \t<<<<============================================>>>>");
}
else if (result.calander2024 === "March") {
    console.log("\n \t \t \t<<<<===============< MARCH 2024 >===============>>>>");
    console.log("\t \t \t<<<<   Sun   Mon   Tue   Wen   Thu   Fri   Sat  >>>>");
    console.log("\t \t \t<<<<                                  1     2   >>>>");
    console.log("\t \t \t<<<<    3     4     5     6     7     8     9   >>>>");
    console.log("\t \t \t<<<<   10    11    12    13    14    15    16   >>>>");
    console.log("\t \t \t<<<<   17    18    19    20    21    22    23   >>>>");
    console.log("\t \t \t<<<<   24    25    26    27    28    29    30   >>>>");
    console.log("\t \t \t<<<<   31                                       >>>>");
    console.log("\t \t \t<<<<============================================>>>>");
}
else if (result.calander2024 === "April") {
    console.log("\n \t \t \t<<<<===============< APRIL 2024 >===============>>>>");
    console.log("\t \t \t<<<<   Sun   Mon   Tue   Wen   Thu   Fri   Sat  >>>>");
    console.log("\t \t \t<<<<          1     2     3     4     5     6   >>>>");
    console.log("\t \t \t<<<<    7     8     9    10    11    12    13   >>>>");
    console.log("\t \t \t<<<<   14    15    16    17    18    19    20   >>>>");
    console.log("\t \t \t<<<<   21    22    23    24    25    26    27   >>>>");
    console.log("\t \t \t<<<<   28    29    30                           >>>>");
    console.log("\t \t \t<<<<============================================>>>>");
}
else if (result.calander2024 === "May") {
    console.log("\n \t \t \t<<<<===============< MAY 2024 >=================>>>>");
    console.log("\t \t \t<<<<   Sun   Mon   Tue   Wen   Thu   Fri   Sat  >>>>");
    console.log("\t \t \t<<<<                      1     2     3     4   >>>>");
    console.log("\t \t \t<<<<    5     6     7     8     9    10    11   >>>>");
    console.log("\t \t \t<<<<   12    13    14    15    16    17    18   >>>>");
    console.log("\t \t \t<<<<   19    20    21    22    23    24    25   >>>>");
    console.log("\t \t \t<<<<   26    27    28    29    30    31         >>>>");
    console.log("\t \t \t<<<<============================================>>>>");
}
else if (result.calander2024 === "June") {
    console.log("\n \t \t \t<<<<===============< JUNE 2024 >================>>>>");
    console.log("\t \t \t<<<<   Sun   Mon   Tue   Wen   Thu   Fri   Sat  >>>>");
    console.log("\t \t \t<<<<                                        1   >>>>");
    console.log("\t \t \t<<<<    2     3     4     5     6     7     8   >>>>");
    console.log("\t \t \t<<<<    9    10    11    12    13    14    15   >>>>");
    console.log("\t \t \t<<<<   16    17    18    19    20    21    22   >>>>");
    console.log("\t \t \t<<<<   23    24    25    26    27    28    29   >>>>");
    console.log("\t \t \t<<<<   30                                       >>>>");
    console.log("\t \t \t<<<<============================================>>>>");
}
else if (result.calander2024 === "July") {
    console.log("\n \t \t \t<<<<===============< JULY 2024 >================>>>>");
    console.log("\t \t \t<<<<   Sun   Mon   Tue   Wen   Thu   Fri   Sat  >>>>");
    console.log("\t \t \t<<<<          1     2     3     4     5     6   >>>>");
    console.log("\t \t \t<<<<    7     8     9    10    11    12    13   >>>>");
    console.log("\t \t \t<<<<   14    15    16    17    18    19    20   >>>>");
    console.log("\t \t \t<<<<   21    22    23    24    25    26    27   >>>>");
    console.log("\t \t \t<<<<   28    29    30    31                     >>>>");
    console.log("\t \t \t<<<<============================================>>>>");
}
else if (result.calander2024 === "August") {
    console.log("\n \t \t \t<<<<===============< AUGUST 2024 >==============>>>>");
    console.log("\t \t \t<<<<   Sun   Mon   Tue   Wen   Thu   Fri   Sat  >>>>");
    console.log("\t \t \t<<<<                            1     2     3   >>>>");
    console.log("\t \t \t<<<<    4     5     6     7     8     9    10   >>>>");
    console.log("\t \t \t<<<<   11    12    13    14    15    16    17   >>>>");
    console.log("\t \t \t<<<<   18    19    20    21    22    23    24   >>>>");
    console.log("\t \t \t<<<<   25    26    27    28    29    30    31   >>>>");
    console.log("\t \t \t<<<<============================================>>>>");
}
else if (result.calander2024 === "September") {
    console.log("\n \t \t \t<<<<===============< SEPTEMBER 2024 >===========>>>>");
    console.log("\t \t \t<<<<   Sun   Mon   Tue   Wen   Thu   Fri   Sat  >>>>");
    console.log("\t \t \t<<<<    1     2     3     4     5     6     7   >>>>");
    console.log("\t \t \t<<<<    8     9    10    11    12    13    14   >>>>");
    console.log("\t \t \t<<<<   15    16    17    18    19    20    21   >>>>");
    console.log("\t \t \t<<<<   22    23    24    25    26    27    28   >>>>");
    console.log("\t \t \t<<<<   29    30                                 >>>>");
    console.log("\t \t \t<<<<============================================>>>>");
}
else if (result.calander2024 === "October") {
    console.log("\n \t \t \t<<<<===============< OCTOBER 2024 >=============>>>>");
    console.log("\t \t \t<<<<   Sun   Mon   Tue   Wen   Thu   Fri   Sat  >>>>");
    console.log("\t \t \t<<<<                1     2     3     4     5   >>>>");
    console.log("\t \t \t<<<<    6     7     8     9    10    11    12   >>>>");
    console.log("\t \t \t<<<<   13    14    15    16    17    18    19   >>>>");
    console.log("\t \t \t<<<<   20    21    22    23    24    25    26   >>>>");
    console.log("\t \t \t<<<<   27    28    29    30    31               >>>>");
    console.log("\t \t \t<<<<============================================>>>>");
}
else if (result.calander2024 === "November") {
    console.log("\n \t \t \t<<<<===============< NOVEMBER 2024 >============>>>>");
    console.log("\t \t \t<<<<   Sun   Mon   Tue   Wen   Thu   Fri   Sat  >>>>");
    console.log("\t \t \t<<<<                                  1     2   >>>>");
    console.log("\t \t \t<<<<    3     4     5     6     7     8     9   >>>>");
    console.log("\t \t \t<<<<   10    11    12    13    14    15    16   >>>>");
    console.log("\t \t \t<<<<   17    18    19    20    21    22    23   >>>>");
    console.log("\t \t \t<<<<   24    25    26    27    28    29    30   >>>>");
    console.log("\t \t \t<<<<============================================>>>>");
}
else if (result.calander2024 === "December") {
    console.log("\n \t \t \t<<<<===============< DECEMBER 2024 >============>>>>");
    console.log("\t \t \t<<<<   Sun   Mon   Tue   Wen   Thu   Fri   Sat  >>>>");
    console.log("\t \t \t<<<<    1     2     3     4     5     6     7   >>>>");
    console.log("\t \t \t<<<<    8     9    10    11    12    13    14   >>>>");
    console.log("\t \t \t<<<<   15    16    17    18    19    20    21   >>>>");
    console.log("\t \t \t<<<<   22    23    24    25    26    27    28   >>>>");
    console.log("\t \t \t<<<<   29    30    31                           >>>>");
    console.log("\t \t \t<<<<============================================>>>>");
}
else if (result.calander2024 === "Quit") {
    console.log("\n \t \t \t<<<<============<> Thanks For Use <>==========>>>>");
    console.log("\t \t \t<<<<=========<> CODE WITH BASIT SHAH <>=======>>>>\n");
}
else {
    console.log("Syntax Error , Your Demand Is Not Eligible For It");
}
