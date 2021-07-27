# Middleware 實作練習
利用Express和moment實作伺服器接收請求紀錄。
# 功能介紹
* 伺服器接到任一請求時，server log 上能正確印出
1. 伺服器收到請求的時間戳記，如 2019-5-17 18:51:12 - 以當地時間 (台北) 顯示
1. 請求的 HTTP 方法
1. URL
1. 伺服器回應的時間長度，如 8ms


---




# 環境建置
* Visual Studio Code
* Express 4.17.1
* Node.js
* express-handlebars 5.3.2
* Body-parser 1.19.0
* moment 2.29.1

---

# 安裝流程
1. 開啟終端機，並cd 要放專案的位置並執行:

```
git clone https://github.com/ioriayaka/middleware-practice.git
```

2. 進入專案資料夾

```
cd middleware-practice.git
```

3. 安裝 npm 套件

```
npm install
```

4. 安裝 nodemon 套件 (若未安裝)

```
npm install -g nodemon
```

5. 啟動伺服器，執行 app.js 檔案

```
npm run dev
```

6. 當終端機出現以下字樣，表示啟動完成

```
The Express server is running on http://localhost:3000
```