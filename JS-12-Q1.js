//! OPTIONAL
// ? Question-1:Using lexical scope, Write a function that displays the following outputs in order:
/**
 * Action
 * Potential
 * Signals
 */
// !Answer:
function showOutputs(){
    function showAction(){
        console.log("Action");

        function showPotenial(){
            console.log("Potential");

            function showSignals(){
                console.log("Signals")
            }
            showSignals()
        }
        showPotenial()
    }
    showAction()
}

showOutputs()