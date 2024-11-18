/*
    What would each of these lines of code do:

    1. true && console.log("moo");
    2. false && console.log("moo moo?")
    3. true || console.log("hello friend");
    4. false || console.log("bye friend");

    Once you see the results, write in a comment why it works that way
*/

// "moo" is logged because the first operand is true, so the second operand is evaluated.
true && console.log("moo");

// Nothing is logged because the first operand is false, so the second operand is not evaluated.
false && console.log("moo moo?");

// Nothing is logged because the first operand is true, so the second operand is not evaluated.
true || console.log("hello friend");

// "bye friend" is logged because the first operand is false, so the second operand is evaluated.
false || console.log("bye friend");
