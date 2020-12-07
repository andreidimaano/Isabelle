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
    
    });
});
