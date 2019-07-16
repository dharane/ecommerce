var productObj = {
    id: '',
    name: '',
    info: '',
    price: '',
    url: ''
};

function addProduct() {
    document.getElementById("addBtn");
    var proId = document.getElementById("ProductId").value;
    console.log(proId);
    var proName = document.getElementById("ProductName").value;
    var proInfo = document.getElementById("ProductInfo").value;
    var proPrice = document.getElementById("ProductPrice").value;
    var proUrl = document.getElementById("ProductPath").value;

    var productObj = {
        id: proId,
        name: proName,
        info: proInfo,
        price: proPrice,
        url: proUrl
    };

    var productArray = localStorage.getItem('product') !== undefined && localStorage.getItem('product') !== null ?
        JSON.parse(localStorage.getItem('product')) : [];
    productArray.push(productObj);
    localStorage.setItem('product', JSON.stringify(productArray));
    console.log('local value', productArray);
}