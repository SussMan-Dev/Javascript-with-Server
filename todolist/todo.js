let url = "http://localhost:8000/products";

const load = async()=>{
    try {
        let productsData = document.getElementById("Products-data")
        let res = await fetch(url)
        let data = await res.json()
        let products = ``
        data.forEach(product => {
            products += `<tr>
            <td id="${product.id}">${product.id}</td>
            <td id="${product.name}">${product.name}</td>
            <td id="${product.price}">${product.price}</td>
            <td id="${product.category}">${product.category}</td>
            <td id="${product.stock}">${product.stock}</td>
            <td>
            <button>Sửa</button>
            <button>Xóa</button>
            </td>
            </tr>`
        productsData.innerHTML = products
        });
    } catch (error) {}
}

const createProductForm=()=>{
    let createProductForm = document.getElementById("createProductForm")
    createProductForm.innerHTML=`<h1>Thêm sản phẩm</h1>
    <label for=productId>ID:</label>
    <input type="number" id="productId" required>
    <label for=productName>Name:</label>
    <input type="text" id="productName" required>
    <label for=productPrice>Price:</label>
    <input type="number" id="productPrice" required>
    <label for=productCategory>Category:</label>
    <input type="text" id="productCategory" required>
    <label for=productStock>Stock:</label>
    <input type="number" id="productStock" required>
    <button type="button" onclick="addProduct()">Thêm vào</button>`
}
const addProduct = async()=>{
    try {
        let productId = document.getElementById("productId").value
        let productName = document.getElementById("productName").value
        let productPrice = document.getElementById("productPrice").value
        let productCategory = document.getElementById("productCategory").value
        let productStock = document.getElementById("productStock").value
        let Data = {
            id:productId,
            name:productName,
            price:productPrice,
            category:productCategory,
            stock: productStock,
        }
        await fetch(url,{
            method:"POST",
            headers:{
                "Content-Type": "application/json",
            },
            body: JSON.stringify(Data)
        }) 
        load()
    } catch (error) {
        console.log(error);
    }
}

const editProductForm = ()=>{

}
load()