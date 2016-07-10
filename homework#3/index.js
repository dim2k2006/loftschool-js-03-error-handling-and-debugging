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
        },
        div: function() {
            var argumentsLength = arguments.length,
                i = 0,
                div = this.source;

            try {

                for (i; i < argumentsLength; i++) {

                    if (arguments[i] === 0) {

                        throw new Error('На ноль делить нельзя');

                    }

                    div = div / arguments[i];

                }

                return div;

            } catch(e) {

                return e;

            }

        },
        mul: function() {
            var argumentsLength = arguments.length,
                i = 0,
                mul = this.source;

            for (i; i < argumentsLength; i++) {

                mul = mul * arguments[i];

            }

            return mul;
        }
    };
};

module.exports = calculator;