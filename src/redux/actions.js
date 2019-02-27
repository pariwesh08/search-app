export  function saveAction(data){
    console.log('in action function');
    return {
        type:'add',
        user:data
    }
}