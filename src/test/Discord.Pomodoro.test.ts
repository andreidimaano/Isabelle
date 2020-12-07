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