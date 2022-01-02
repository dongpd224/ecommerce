-- Up
CREATE TABLE items(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    item_name NVARCHAR,
    discount_price DECIMAL,
    img_link TEXT
);

INSERT INTO items (item_name, discount_price,img_link) values ('Keo Dán Giày Nhiệt XIMO Trong Suốt Siêu Dính Dùng Không Tổn Thương Da XKDG06',29000,'https://salt.tikicdn.com/cache/w1200/ts/product/5b/8d/63/89780a394c7f879d285641d31b256041.jpg');
INSERT INTO items (item_name, discount_price,img_link) values ('Thùng 24 Lon Nước Tăng Lực Sting Dâu (320ml/Lon)',182000,'https://salt.tikicdn.com/cache/w1200/media/catalog/product/tmp/77/db/19/85ec595d9bfbfc108b3676fb07e5f5a2.PNG.webp' )
-- Down
DROP TABLE items