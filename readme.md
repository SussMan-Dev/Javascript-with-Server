# JS with Fake Server

Dự án này dùng HTML, CSS, JavaScript thuần ở phía frontend và `json-server` để tạo một REST API giả lập từ file `db.json`.

Phần chính đang có là trang `todolist/todo.html`, gọi API `http://localhost:8000/products` để hiển thị, thêm, sửa và xóa sản phẩm.

## Công nghệ sử dụng

- HTML/CSS/JavaScript thuần
- Node.js và npm
- json-server

## Cấu trúc dự án

```text
js-with-fake-server/
├── db.json
├── port.json
├── package.json
├── readme.md
├── todolist/
│   ├── todo.html
│   ├── todo.js
│   └── todolist.css
├── async-await/
├── asynchronous-synchronous/
├── callback-function/
├── promise/
└── trycatch/
```

Trong đó:

- `db.json`: dữ liệu giả lập cho API.
- `port.json`: cấu hình port cho `json-server`.
- `package.json`: khai báo thư viện và script chạy server.
- `todolist/todo.html`: giao diện danh sách sản phẩm.
- `todolist/todo.js`: code gọi API bằng `fetch`.
- Các thư mục còn lại là ví dụ học JavaScript bất đồng bộ.

## Cách tạo dự án này từ đầu

### 1. Tạo thư mục dự án

```bash
mkdir js-with-fake-server
cd js-with-fake-server
```

### 2. Khởi tạo npm

```bash
npm init -y
```

Lệnh này tạo file `package.json`.

### 3. Cài json-server

```bash
npm install json-server@0.17.3
```

Sau khi cài xong, `json-server` sẽ nằm trong `dependencies` của `package.json`.

### 4. Tạo file dữ liệu `db.json`

Tạo file `db.json` ở thư mục gốc:

```json
{
  "products": [
    {
      "id": 1,
      "name": "iPhone 15",
      "price": 1000,
      "category": "phone",
      "stock": 25
    }
  ],
  "users": [
    {
      "id": 1,
      "name": "Nguyen Van A",
      "email": "a@example.com",
      "role": "admin",
      "active": true
    }
  ]
}
```

Mỗi key cấp cao trong `db.json` sẽ trở thành một endpoint API. Ví dụ:

- `products` tạo endpoint `http://localhost:8000/products`
- `users` tạo endpoint `http://localhost:8000/users`

### 5. Tạo file cấu hình port

Tạo file `port.json`:

```json
{
  "port": 8000
}
```

File này giúp server luôn chạy ở port `8000`.

### 6. Thêm script chạy server

Mở `package.json` và thêm phần `scripts`:

```json
{
  "scripts": {
    "start": "json-server --watch db.json --config port.json",
    "dev": "json-server --watch db.json --config port.json"
  }
}
```

Trong dự án hiện tại, bạn có thể chạy bằng một trong hai lệnh:

```bash
npm start
```

hoặc:

```bash
npm run dev
```

## Cách chạy dự án hiện tại

### 1. Cài thư viện

Nếu mới tải project về và chưa có thư mục `node_modules`, chạy:

```bash
npm install
```

### 2. Chạy fake server

```bash
npm start
```

hoặc:

```bash
npm run dev
```

Khi chạy thành công, API sẽ có dạng:

```text
http://localhost:8000/products
http://localhost:8000/users
```

### 3. Mở giao diện

Mở file:

```text
todolist/todo.html
```

Trang này sẽ gọi API từ:

```js
let url = "http://localhost:8000/products";
```

Vì vậy cần chạy server trước, rồi mới mở trang HTML.

## Các API thường dùng

### Lấy danh sách sản phẩm

```http
GET http://localhost:8000/products
```

### Lấy một sản phẩm theo id

```http
GET http://localhost:8000/products/1
```

### Thêm sản phẩm

```http
POST http://localhost:8000/products
```

Body mẫu:

```json
{
  "id": 21,
  "name": "New Product",
  "price": 100,
  "category": "demo",
  "stock": 10
}
```

### Sửa sản phẩm

```http
PUT http://localhost:8000/products/1
```

### Xóa sản phẩm

```http
DELETE http://localhost:8000/products/1
```

## Luồng hoạt động của trang todo

Trong `todolist/todo.js`:

- `load()` gọi `GET /products` để lấy dữ liệu và render ra bảng.
- `createProductForm()` tạo form thêm sản phẩm.
- `addProduct()` gửi `POST /products`.
- `editProductForm(id)` lấy dữ liệu sản phẩm và chuyển dòng trong bảng sang trạng thái sửa.
- `editProduct(id)` gửi `PUT /products/:id`.
- `deleteProduct(id)` gửi `DELETE /products/:id`.

Sau khi thêm hoặc sửa, hàm `load()` được gọi lại để cập nhật bảng.

## Ghi chú

- `json-server` sẽ ghi thay đổi trực tiếp vào `db.json`.
- Nếu muốn khôi phục dữ liệu ban đầu, có thể dùng file `backup-db.json`.
- Nếu đổi port trong `port.json`, cần đổi lại URL trong `todolist/todo.js` cho khớp.
