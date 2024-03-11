function loadShoppingCart() {
    let listItem = JSON.parse(localStorage.getItem('cart') || '[]')
    let htmlcontent = '';
    let total = 0;
    for (let index = 0; index < listItem.length; index++) {
        const item = listItem[index];
        total += item.price * item.quantity;
        htmlcontent += `
        <div class="item">
        <div class="image">
          <img
            src="${item.mainImage}"
            alt="calendar-image" />
          <div class="name-product">
            <p class="item-title">${item.name}</p>
            <p class="item-title-small">Category: ${item.category}</p>
          </div>
        </div>
        <div class="each-product">
          <p class="item-title">Each</p>
          <p class="item-title-price">$${item.price}</p>
        </div>
        <div class="quantity-product">
          <p class="item-title">Quantity</p>
          <input type="number" id="quantity" name="quantity" min="1" value="${item.quantity}">
        </div>
        <div class="total-product">
          <p class="item-title">Total</p>
          <p class="item-title-price">$${item.price * item.quantity}</p>
        </div>
      </div>
      <div class="item-footer">
        <a href="">Edit</a>
        <a href="">Remove</a>
        <a href="">Move to Wishlist</a>
        <a href="">Save for Later</a>
      </div>`
    }
    document.getElementById('listItem').innerHTML = htmlcontent;
    document.getElementById('total').innerText = '$' + total.toFixed(2);
    document.getElementById('subtotal').innerText = '$' + total.toFixed(2);
    document.getElementById('estimated').innerText = '$' + total.toFixed(2);
    document.getElementById('length').innerText = listItem.length + ' Items';

}

loadShoppingCart();