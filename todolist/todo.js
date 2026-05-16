let url = "http://localhost:8000/products";

const load = async () => {
    try {
        let productsData = document.getElementById("Products-data");
        let res = await fetch(url);
        let data = await res.json();
        let products = "";

        data.forEach(product => {
            products += `
                <tr id="product-${product.id}">
                    <td><span class="product-id">#${product.id}</span></td>
                    <td>${product.name}</td>
                    <td>${product.price}</td>
                    <td><span class="tag">${product.category}</span></td>
                    <td><span class="stock">${product.stock}</span></td>
                    <td class="actions">
                        <button class="btn btn-warning" onclick="editProductForm(${product.id})">Sửa</button>
                        <button class="btn btn-danger" onclick="deleteProduct(${product.id})">Xóa</button>
                    </td>
                </tr>
            `;
        });

        productsData.innerHTML = products;
    } catch (error) {
        console.log(error);
    }
};

const createProductForm = () => {
    let createProductForm = document.getElementById("createProductForm");

    createProductForm.innerHTML = `
        <h2>Thêm sản phẩm</h2>

        <div class="form-grid">
            <label>
                <span>ID</span>
                <input type="number" id="productId" required>
            </label>

            <label>
                <span>Name</span>
                <input type="text" id="productName" required>
            </label>

            <label>
                <span>Price</span>
                <input type="number" id="productPrice" required>
            </label>

            <label>
                <span>Category</span>
                <input type="text" id="productCategory" required>
            </label>

            <label>
                <span>Stock</span>
                <input type="number" id="productStock" required>
            </label>
        </div>

        <button class="btn btn-success" type="button" onclick="addProduct()">Thêm vào</button>
    `;
};

const addProduct = async () => {
    try {
        let productId = document.getElementById("productId").value;
        let productName = document.getElementById("productName").value;
        let productPrice = document.getElementById("productPrice").value;
        let productCategory = document.getElementById("productCategory").value;
        let productStock = document.getElementById("productStock").value;

        let data = {
            id: productId,
            name: productName,
            price: productPrice,
            category: productCategory,
            stock: productStock,
        };

        await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        load();
    } catch (error) {
        console.log(error);
    }
};

const editProductForm = async (id) => {
    try {
        let res = await fetch(`${url}/${id}`);
        let product = await res.json();
        let row = document.getElementById(`product-${id}`);

        row.classList.add("is-editing");
        row.innerHTML = `
            <td><span class="product-id">#${product.id}</span></td>
            <td><input class="table-input" id="editName" value="${product.name}"></td>
            <td><input class="table-input" id="editPrice" value="${product.price}"></td>
            <td><input class="table-input" id="editCategory" value="${product.category}"></td>
            <td><input class="table-input" id="editStock" value="${product.stock}"></td>
            <td class="actions">
                <button class="btn btn-success" onclick="editProduct(${product.id})">Thay đổi</button>
            </td>
        `;
    } catch (error) {
        console.log(error);
    }
};

const editProduct = async (id) => {
    try {
        let editName = document.getElementById("editName").value;
        let editPrice = document.getElementById("editPrice").value;
        let editCategory = document.getElementById("editCategory").value;
        let editStock = document.getElementById("editStock").value;

        let data = {
            id: id,
            name: editName,
            price: editPrice,
            category: editCategory,
            stock: editStock,
        };

        await fetch(`${url}/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        load();
    } catch (error) {
        console.log(error);
    }
};

    const deleteProduct = async (id)=>{
        try {
            let deleteProduct = await fetch(`${url}/${id}`,{
                method: "DELETE",
            })
        } catch (error) {
            
        }
    }
load();
