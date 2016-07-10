var isSomeTrue = function(source, filterFn) {
    var sourceLength = source.length,
        i = 0,
        counter = 0,
        result = false;

    try {

        if (sourceLength === 0) {
            throw new Error('Массив не должен быть пустым');
        }

        for (i; i < sourceLength; i++) {

            result = filterFn(source[i]);

            if (!result) {

                counter++

            }

        }

        if (counter !== sourceLength) {
            result = true;
        }

    } catch(e) {

        console.log(e);

    }

    return result;
};

var isNumber = function(val) {
    return typeof val === 'number';
};

var allNumbers = [1, 2, 4, 5, 6, 7, 8],
    someNumbers = [1, 2, 'привет', 4, 5, 'loftschool', 6, 7, 8],
    noNumbers = ['это', 'массив', 'без', 'чисел'];


console.log(isSomeTrue(noNumbers, isNumber));