let url = "http://localhost:8000/products"
const load = async(url)=>{
    let res = await fetch(url)
    let data = await res.json()
    let productlist = document.getElementById("Products-data")
    data.forEach(data => {
        productlist.innerHTML += `<tr>
        <td>${data.id}</td>
        <td>${data.name}</td>
        <td>${data.price}</td>
        <td>${data.category}</td>
        <td>${data.stock}</td>
        <td>
        <button>Thêm</button>
        <button>Sửa</button>
        <button>Xóa</button>
        </td>
        </tr>`
    });
}
load(url)
