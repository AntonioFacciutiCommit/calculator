class Calculator
{
    constructor(initialValue = 0) {
        this.result = initialValue;
    }

    add(number)
    {
        this.result = this.result + number;

        return this;
    }

    minus(number)
    {
        this.result = this.result - number;

        return this;
    }

    multiply(number)
    {
        this.result = this.result * number;

        return this;
    }

    divideBy(number)
    {
        this.result = this.result / number;

        return this;
    }
}

module.exports = Calculator