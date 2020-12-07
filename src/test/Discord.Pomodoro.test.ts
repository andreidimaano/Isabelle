let removeMember = () => {
    console.log('remove member')
};

let addMember = () => {
    console.log('add member')
};


let shortshort = () => {
    console.log('timer set to 25');
    addMember();
    setTimeout(async () => {
        //remove from studying list 
        removeMember();
        addMember();    

        console.log('break');
        setTimeout(async () => {
            removeMember();
            console.log('break over')
            //remove from break list
        }, 1000 * 5);

    }, 1000 * 25); 
}


let shortlong = () => {
    console.log('timer set to 25');
    addMember();
    setTimeout(async () => {
        //remove from studying list 
        removeMember();
        addMember();    

        console.log('break');
        setTimeout(async () => {
            removeMember();
            console.log('break over')
            //remove from break list
        }, 1000 * 10);

    }, 1000 * 25); 
}


let longlong = () => {
    console.log('timer set to 50');
    addMember();
    setTimeout(async () => {
        //remove from studying list 
        removeMember();
        addMember();    
        console.log('break');
        setTimeout(async () => {
            removeMember();
            console.log('break over')
            //remove from break list
        }, 1000 * 10);
    }, 1000 * 50); 
}


let longshort = () => {
    console.log('timer set to 50');
    addMember();
    setTimeout(async () => {
        //remove from studying list 
        removeMember();
        addMember();    
        console.log('break');
        setTimeout(async () => {
            removeMember();
            console.log('break over')
            //remove from break list
        }, 1000 * 5);
    }, 1000 * 50); 
}


addMember = jest.fn();
removeMember = jest.fn();
jest.useFakeTimers();


describe('shortshort', () => {
    test('schedules a 5-second timer after 25 seconds', () => {
        shortshort();
        // At this point in time, there should have been a single call to
        // setTimeout to start break in 25 seconds.
        // At this point we have called add member()
        expect(setTimeout).toHaveBeenCalledTimes(1);
        expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 25000);
        expect(addMember).toHaveBeenCalledTimes(1);
    
        // Fast forward and exhaust only currently pending timers
        // (but not any new timers that get created during that process)
        // run the first Timeout
        jest.runOnlyPendingTimers();
        expect(addMember).toHaveBeenCalledTimes(2);
        expect(removeMember).toHaveBeenCalledTimes(1);
    
        // And it should have created a new timer to start the game over in
        // 10 seconds
        expect(setTimeout).toHaveBeenCalledTimes(2);
        expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 5000);

        // run the second Timeout
        // no more timeouts
        jest.runOnlyPendingTimers();
        expect(removeMember).toHaveBeenCalledTimes(2);
        expect(setTimeout).toHaveBeenCalledTimes(2);
    });
});



describe('shortlong', () => {
    test('schedules a 10-second timer after 25 seconds', () => {
        shortlong();
        // At this point in time, there should have been a single call to
        // setTimeout to start break in 25 seconds.
        // At this point we have called add member()
        expect(setTimeout).toHaveBeenCalledTimes(3);
        expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 25000);
        expect(addMember).toHaveBeenCalledTimes(3);
    
        // Fast forward and exhaust only currently pending timers
        // (but not any new timers that get created during that process)
        // run the first Timeout
        jest.runOnlyPendingTimers();
        expect(addMember).toHaveBeenCalledTimes(4);
        expect(removeMember).toHaveBeenCalledTimes(3);
    
        // And it should have created a new timer to start the game over in
        // 10 seconds
        expect(setTimeout).toHaveBeenCalledTimes(4);
        expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 10000);

        // run the second Timeout
        // no more timeouts
        jest.runOnlyPendingTimers();
        expect(removeMember).toHaveBeenCalledTimes(4);
        expect(setTimeout).toHaveBeenCalledTimes(4);
    });
});


 describe('longlong', () => {
     test('schedules a 10-second timer after 25 seconds', () => {
         longlong();
         // At this point in time, there should have been a single call to
         // setTimeout to start break in 25 seconds.
         // At this point we have called add member()
         expect(setTimeout).toHaveBeenCalledTimes(5);
         expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 50000);
         expect(addMember).toHaveBeenCalledTimes(5);
    
         // Fast forward and exhaust only currently pending timers
         // (but not any new timers that get created during that process)
         // run the first Timeout
         jest.runOnlyPendingTimers();
         expect(addMember).toHaveBeenCalledTimes(6);
         expect(removeMember).toHaveBeenCalledTimes(5);
    
         // And it should have created a new timer to start the game over in
         // 10 seconds
         expect(setTimeout).toHaveBeenCalledTimes(6);
         expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 10000);

         // run the second Timeout
         // no more timeouts
         jest.runOnlyPendingTimers();
         expect(removeMember).toHaveBeenCalledTimes(6);
         expect(setTimeout).toHaveBeenCalledTimes(6);
     });
});


 describe('longshort', () => {
     test('schedules a 10-second timer after 25 seconds', () => {
         longshort();
//         // At this point in time, there should have been a single call to
//         // setTimeout to start break in 25 seconds.
//         // At this point we have called add member()
         expect(setTimeout).toHaveBeenCalledTimes(7);
         expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 50000);
         expect(addMember).toHaveBeenCalledTimes(7);

     });
});