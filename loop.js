// node myfile.js


// new timers, tasks, operations are recorded from the myfile running,
myfile.runContent();


const pendingTimers = [];
const pendingOSTasks = [];
const pendingOperations = [];



function shouldContinue() { // if true, the event loop will continue, if false, it will exit
    // check one: any pending setTimeout, setInterval, or setImmediate?
    // check two: any pending OS tasks (like file system)
    // check three: any pending long running operations (like http requests)


    return pendingTimers.length > 0 || pendingOSTasks.length > 0 || pendingOperations.length > 0;
}


// entire body executes in one 'tick' of the event loop
while (shouldContinue()) {
    // 1. node looks at pendingTimers and sees if any functions are ready to be called
    // 2. node looks at pendingOSTasks and pendingOperations and calls relevant callbacks

    // 3.  pause execution. continue when...
    // a new pendingOSTask is done
    // a new pendingOperation is done
    // a timer is about to complete


    // 4. look at pendingTimers. call any functions that are ready

    // 5. handle any 'close' events ( clean up code )

}





// exit back to terminal