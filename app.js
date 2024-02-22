//      global execution =====>      memory phase =====>      execution phase

const num1 = 10;
const num2 = 5;

const sum = (val1, val2) => {

    const total = val1 + val2;

    return total

}

const result1 = sum(num1, num2);
const result2 = sum(100, 200);



// here is the full chart that how it will work in memory


// 1. global execution

        // a. this

// 2. memory phase

        // a. num1 = undefined
        // b. num2 = undefined
        // c. sum = function
        // d. result1 = undefined
        // e. result2 = undefined

// 3. execution phase

        // a. 10
        // b. 5
        //    function is registered so it will not be executed
        // c. result1 sum( 10 , 5 )

            // i.   memory phase

                // 1. val1 = undefined
                // 2. val2 = undefined
                // 3. total = undefined

            // ii.  execution phase

                // 1. val1 = 10
                // 2. val2 = 5
                // 3. total = 15
            
            // iii. and the result will save in global execution
            // iv.  both memory & execution phase will delete

        // d. result2 sum( 100 , 200 )

            // i.   memory phase

                // 1. val1 = undefined
                // 2. val2 = undefined
                // total = undefined

            // ii.  execution phase

                // 1. val1 = 100
                // 2. val2 = 200
                // 3.total = 300
            
            // iii. and the result will save in global execution
            // iv.  both memory & execution phase will delete