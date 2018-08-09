describe('global scope - scopes and closures', () => {
    it('should belong to the global scope', function(){
        // declare a variable MyNumber of type number, that should be available in the global scope (outside the MyMathLibrary object)
        // update the multiplyByTwo() method code to multiply the value of MyNumber by 2
        // make sure the MyMathLibrary.multiplyByTwo() method has been called

        var MyMathLibrary = {
            multiplyByTwo: function() {
                /* ... */
            }
        }

        spyOn(MyMathLibrary, "multiplyByTwo").and.callThrough();

        expect(MyNumber).toEqual(5);

        /* ... */

        expect(MyMathLibrary.multiplyByTwo).toHaveBeenCalled();
        expect(MyNumber).toEqual(10);
    })
})


describe('functional scope - scopes and closures', () => {
    it('should belong to the function scope', function(){
        // declare a variable MyNumber of type number (with an initial value of 9), that should be available in the global scope (outside the MyMathLibrary object)
        // update the doMath() method code to make the MyNumber value equal 10 / hint: you just need to add one line of code
        // make sure the MyMathLibrary.doMath() method has been called (with a proper parameter value)
        // make sure the addSix() and reduceFive() functions are NOT available in the global scope

        var MyMathLibrary = {
            doMath: function(arg) {
                MyNumber = addSix(arg);
            }
        }

        function addSix(arg) {
            return arg + 6;
        }

        function reduceFive(arg) {
            return arg - 5;
        }


        spyOn(MyMathLibrary, "doMath").and.callThrough();

        // testing initial value
        expect(MyNumber).toEqual(9);

        /* ... */

        expect(MyMathLibrary.doMath).toHaveBeenCalled();

        // testing result value
        expect(MyNumber).toEqual(10);
        expect(typeof addSix).toEqual("undefined");
        expect(typeof reduceFive).toEqual("undefined");
    })

    it('should belong to the function scope - IIFE', function(){
        // declare a variable MyNumber of type number (with an initial value of 10), that should be available in the global scope (outside the MyMathLibrary object)
        // DO NOT modify the MyMathLibrary.doMath() method code
        // make sure the MyMathLibrary.doMath() method has NOT been called within the global scope
        // call the doSomeMoreMath() function but make sure it is not poluting the global scope (use IIFE)

        var MyMathLibrary = {
            doMath: function(arg) {
                MyNumber = addSix(arg);
            }
        }

        function addSix(arg) {
            return arg + 6;
        }

        function doSomeMoreMath(){
            MyMathLibrary.doMath(MyNumber)
        }

        spyOn(MyMathLibrary, "doMath").and.callThrough();

        doSomeMoreMath();

        expect(MyMathLibrary.doMath).not.toHaveBeenCalled();

        // testing result value
        expect(MyNumber).toEqual(16);
        expect(typeof doSomeMoreMath).toEqual("undefined");
    })
})