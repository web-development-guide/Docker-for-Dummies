(function(){
  const listBox = document.querySelector('.todos__items');
  const createListItem = function(item) {
    const listItem = document.createElement('li');
    const spanChild = document.createElement('span');
    spanChild.append(item.title);
    listItem.append(spanChild);
    listItem.id = item.id;
    listItem.classList.add('todos__item');
    listBox.append(listItem);
  };
  fetch('http://localhost:9000')
    .then(function(res) {
      if (res.error) {
        console.log(res.error);
        return;
      }

      if (!res.count) {
        listBox.classList.add('todos__items--empty');
        return;
      }

      listBox.classList.remove('todos__items--empty');
      const items = res.models;
      items.forEach(createListItem);
    });
})();
