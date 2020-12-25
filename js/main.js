var pNameInp = document.getElementById("pName");
var pPriceInp = document.getElementById("pPrice");
var pCatInp = document.getElementById("pCat");
var pDescInp = document.getElementById("pDesc");
var myStore ;

if (localStorage.getItem('productsInStore') == null){

    myStore = [];

}else {

    myStore = JSON.parse(localStorage.getItem('productsInStore'));
    displayProducts();

}

// Add Product Function :

function addProduct() {

  var pNameValue = pNameInp.value;
  var pPriceValue = pPriceInp.value;
  var pCatValue = pCatInp.value;
  var pDescValue = pDescInp.value;

  var product = {
    name: pNameValue,
    price: pPriceValue,
    category: pCatValue,
    decsription: pDescValue

  };

  myStore.push(product);

  localStorage.setItem('productsInStore', JSON.stringify(myStore));

  clearInputs();

  displayProducts();

}

// Clear Inputs After Adding Function :

function clearInputs() {

  pNameInp.value = "";
  pPriceInp.value = "";
  pCatInp.value = "";
  pDescInp.value = "";

}

// Display Products in Page Function :

function displayProducts() {

    var temp = "";

    for(var i=0;i<myStore.length;i++){

        temp += `
        <div class="col-md-4 my-3">
          <div class="card">
            <img
              src="https://46ba123xc93a357lc11tqhds-wpengine.netdna-ssl.com/wp-content/uploads/2019/09/amazon-alexa-event-sept-2019.jpg"
              class="card-img-top img-fluid"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">${myStore[i].name}</h5>
              <hr>
              <span class="font-weight-bold">${myStore[i].price}</span>
              <hr>
              <p  class="font-weight-bold">${myStore[i].category}</p>
              <hr>
              <p class="card-text">${myStore[i].decsription}</p>
              <button onclick="deletProduct(${i})" href="#" class="btn btn-danger">Delete</button>
              <button onclick="updateProduct(${i})" href="#" class="btn btn-primary">Update</button>
            </div>
          </div>
        </div>   `
    }

    document.getElementById('products').innerHTML = temp;

}

// Delete Product Function :

function deletProduct(pindex){

  myStore.splice(pindex,1);

  displayProducts();

  localStorage.setItem("productsInStore", JSON.stringify(myStore));

};

// Search For A product Function :

function searchProduct( userWord ){

  var hasala ="";

  for(var i=0; i<myStore.length ; i++){

    if((myStore[i].name).toLowerCase().includes(userWord.toLowerCase())){

      hasala +=  `
      <div class="col-md-4 my-3">
        <div class="card">

          <img src="https://46ba123xc93a357lc11tqhds-wpengine.netdna-ssl.com/wp-content/uploads/2019/09/amazon-alexa-event-sept-2019.jpg"
          class="card-img-top img-fluid"
          alt="..." />

          <div class="card-body">
            <h5 class="card-title">${myStore[i].name}</h5>
            <hr>
            <span class="font-weight-bold">${myStore[i].price}</span>
            <hr>
            <p  class="font-weight-bold">${myStore[i].category}</p>
            <hr>
            <p class="card-text">${myStore[i].decsription}</p>
            <button onclick="deletProduct(${i})" href="#" class="btn btn-danger">Delete</button>
            <button onclick="updateProduct(${i})" href="#" class="btn btn-primary">Update</button>
          </div>
        </div>
      </div>
      `
    }
  }

  if(hasala == ""){

    displayProducts();

  }else {

    document.getElementById('products').innerHTML = hasala;

  }

};

// Update Product Function :

function updateProduct(indx){

  for(var i=0; i<myStore.length ; i++){

    if(i == indx){

      document.getElementById("products").innerHTML =  `
      <div class="col-md-4 my-3">
        <div class="card">
          <img src="https://46ba123xc93a357lc11tqhds-wpengine.netdna-ssl.com/wp-content/uploads/2019/09/amazon-alexa-event-sept-2019.jpg"
          class="card-img-top img-fluid"
          alt="..." />
          <div class="card-body">
            <input id="upName" value="${myStore[i].name}" placeholder="Update Name" class="form-control my-2">
            <input id="upPrice" value="${myStore[i].price}" placeholder="Update Price" class="form-control my-2">
            <input id="upCat" value="${myStore[i].category}" placeholder="Update Category" class="form-control my-2">
            <textarea id="upDesc" placeholder="Update Description" class="form-control my-2">${myStore[i].decsription}</textarea>
            <button onclick="deletProduct(${i})" href="#" class="btn btn-danger">Delete</button>
            <button onclick="saveUpdate(${i})" href="#" class="btn btn-primary">Save</button>
          </div>
        </div>
      </div>
     `
    }
  }
}

// Save Changes In Product Function :

function saveUpdate(indx){

  myStore[indx].name = document.getElementById("upName").value;
  myStore[indx].price = document.getElementById("upPrice").value;
  myStore[indx].category = document.getElementById("upCat").value;;
  myStore[indx].decsription = document.getElementById("upDesc").value;;

  for(var i=0;i<myStore.length;i++){

      document.getElementById("products").innerHTML = `
      <div class="col-md-4 my-3">
        <div class="card">
          <img
            src="file:///C:/Users/Nonna%20Elmasry/Desktop/route/imges/work-1.jpg"
            class="card-img-top img-fluid"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">${myStore[i].name }</h5>
            <span class="font-weight-bold">${ myStore[i].price}</span>
            <span class="font-weight-bold">${myStore[i].category}</span>
            <p class="card-text">${myStore[i].decsription}</p>
            <button onclick="deletProduct(${i})" href="#" class="btn btn-danger">Delete</button>
            <button onclick="updateProduct(${i})" href="#" class="btn btn-primary">Update</button>
          </div>
        </div>
      </div>
      `;
}

displayProducts();

localStorage.setItem("productsInStore", JSON.stringify(myStore));

}