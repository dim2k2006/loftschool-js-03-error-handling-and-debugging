var calculator = function(firstNumber) {
    return math = {
        source: firstNumber,

        sum: function() {
            var argumentsLength = arguments.length,
                i = 0,
                sum = 0;

            for (i; i < argumentsLength; i++) {

                sum += arguments[i]

            }

            return this.source + sum;
        },
        dif: function() {
            var argumentsLength = arguments.length,
                i = 0,
                dif = 0;

            for (i; i < argumentsLength; i++) {

                dif -= arguments[i]

            }

            return this.source + dif;
        }
    };
};

var myCalculator = calculator(100);

console.log(myCalculator.sum(1, 2, 3));
console.log(myCalculator.dif(10, 20));