var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');


// Form submit event
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', removeItem);
// Filter event
filter.addEventListener('keyup', filterItems);

function addItem(e){
  e.preventDefault();

  var newItem = document.getElementById('item').value;
  var li = document.createElement('li');
  li.className = 'list-group-item';
  li.appendChild(document.createTextNode(newItem));
var des=document.getElementById("description").value;
li.appendChild(document.createTextNode(des));

  var deleteBtn = document.createElement('button');
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
  deleteBtn.appendChild(document.createTextNode('X'));
  li.appendChild(deleteBtn);
  var editBtn=document.createElement("button");
  editBtn.className="btn btn-primary btn-sm float-right";
  editBtn.appendChild(document.createTextNode("Edit"));
  li.appendChild(editBtn);
  itemList.appendChild(li);

  document.getElementById('item').value="";
  document.getElementById('description').value="";
  
}

// Remove item
function removeItem(e){
  if(e.target.classList.contains('delete')){
    if(confirm('Are You Sure?')){
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

// Filter Items
function filterItems(e){
    // convert text to lowercase
    var text = e.target.value.toLowerCase();
    // Get lis
    var items = itemList.getElementsByClassName("list-group-item");
    // Convert to an array
    Array.from(items).forEach(function(item){
      var itemName = item.firstChild.textContent;
      var itemDesc=item.childNodes[1].textContent;

      if(itemName.toLowerCase().indexOf(text) != -1 || itemDesc.toLowerCase().indexOf(text)!= -1 ){
        item.style.display = 'block';
      }
      else {
        item.style.display = 'none';
      }
    });
  }
  var items = itemList.getElementsByClassName("list-group-item");  
  Array.from(items).forEach(function(item){
  console.log(item.childNodes[1].textContent);
  })