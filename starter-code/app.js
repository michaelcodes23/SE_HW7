

$(() => {


    // GIVEN TODOS ARRAY - DO NOT ERASE!
   const givenToDos = [
     'buy some sand',
     'comb the unicorn',
     'brush my fang',
     'water the hardwoods'
   ]
   const h2 = $('<h3>').text('test23').addClass('test')
  //  const but = $('<button>').text('Completed');
    const toDo = $('#to-do-list')
  const done = $('#completed')
  //  $('#completed').append(but)
  const newDiv = $('<div>')
  const addto =()=>{
  for (let i = 0; i< givenToDos.length;i++){
    const newDiv = $('<div>').addClass('to-do-item');
    const to = $('<h3>').text(givenToDos[i]);
    const but = $('<button>').addClass('but').text('Completed');
    toDo.append(newDiv);
    newDiv.append(to);
    but.insertAfter(to);

  }

}
addto();
// $('.but').on('click',moveToComplete)
 
  const toList =(event)=>{
    event.preventDefault();
    const input = $("#input-box").val();  
    if(input == ''){
      alert(`You didn't input anything to the 'To Do List', please add
       something in the box before pressing 'Add'!`);
    }
    else{
    const input = $("#input-box").val();  
    const button = $('<button>').addClass('but').text('Completed');
    const item = $('<div>').addClass('to-do-item');
    console.log(input);
    const newItem = $('<h3>').text(input);
    // const text = $('<p>').addClass('listLeft').text(input);

    toDo.append(item);
    item.append(newItem);
    button.insertAfter(newItem);
    $('.but').on('click',moveToComplete);
    }
  }
  const moveToComplete = (event)=>{
    
    const item = $(event.currentTarget).parent();
    console.log(`testing moving ${item.text()} to 'Done List'`);
    item.removeClass('to-do-item');
    item.addClass('done-item');
    
    item.detach().appendTo(done);
    $(event.currentTarget).text('Remove').addClass('remove');
    $('.remove').on('click',removeItem)

  }
  const removeItem = (event)=>{
        const item = $(event.currentTarget).parent();
        console.log('removed'+item.text())
        item.remove();
  }
  $('#submit').on('click',toList);

 })

