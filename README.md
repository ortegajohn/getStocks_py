# getStocks_py

## Instuctions

### Prequests (node.js, python, some sql db)

- Clone the repository
- ```cd getStocks_py ```
- ``` npm install ```
- Create .env file with db connection
export
   DB_HOST="localhost"
   DB_USER="root"
   DB_PASS="root"
   DB_NAME="istock_db"
- Check your sql server can connect
- Create the database and tables with db\schema.sql
- Open cmd and cd to repo
- In cmd execute ``` python get_stocks.py``` 
- Open another cmd and cd to repo
- In cmd execute ``` npm start ``` 
- Open the broswer and go to http://localhost:3000/

Manually refreshing the page may be necessary to see the table populate. 


