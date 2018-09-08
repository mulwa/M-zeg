# M-zeg


![alt tag](https://github.com/mulwa/M-zeg/blob/master/screenshots/transactionppage.png "Main  Navigation")
![alt tag](https://github.com/mulwa/M-zeg/blob/master/screenshots/registation.png "registration")

## Endpoints Available

| Method | Endpoint                        | Description       |Parameters|
| ------ | ------------------------------- | ------------------|----------|
| POST   | https://m-zeg.herokuapp.com/user| sign up a user    |firstname,surname,mobile,email,     password |
| POST   | https://m-zeg.herokuapp.com/user/login| login a user|email, password|
| POST   | https://m-zeg.herokuapp.com/account/top| Used to top up account balance| amount, token|
| POST   | https://m-zeg.herokuapp.com /account/sendmoney| For sending money from on e account to  another| amount, receiverEmail, token|
|GET    |https://m-zeg.herokuapp.com/account/moneysend|Returns a list of the send transactions |token|
|GET |https://m-zeg.herokuapp.com/account/moneyreceived|Returns a list of received transactions transactions |token|
|GET | https://m-zeg.herokuapp.com/account/balance| Returns your account  balance| token|




