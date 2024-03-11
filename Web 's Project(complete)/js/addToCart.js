let button = document.getElementById('addToCart')
button.onclick = function (event) {
    // lấy thông tin sp
    let name = document.getElementById('name').innerText
    let price = document.getElementById('price').innerText
    let quantity = document.getElementById('quantity').value
    let category = document.getElementById('category').innerText
    let mainImage = document.getElementById('mainImage').getAttribute('src')
    let item = {
        name: name,
        price: Number(price),
        quantity: Number(quantity),
        category: category,
        mainImage: mainImage,
    }
    // lưu thông tin vào localstoage
    let listItem = JSON.parse(localStorage.getItem('cart') || '[]')

    // kiểm tra sp có trong giỏ hàng chưa
    let existed = false;
    for (let index = 0; index < listItem.length; index++) {
        const itm = listItem[index];
        if (itm.name === name) {
            // da co sp trong gio hang
            listItem[index].quantity = Number(itm.quantity) + Number(quantity)
            existed = true
        }
    }
    // chua co sp trong gio hang
    if (!existed) {
        listItem.push(item)
    }
    localStorage.setItem('cart', JSON.stringify(listItem))
}