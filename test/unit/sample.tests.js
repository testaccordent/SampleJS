(function () {
    QUnit.config.testTimeout = 10000;
    
    var okAsync = QUnit.okAsync,
        stringformat = QUnit.stringformat;
    
 
    module('hello tests');

    test("hello test", 
        function () {
            ok(1 == "1", "Passed!");
        }
    );
})();