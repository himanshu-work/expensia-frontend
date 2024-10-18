# Working with AuthService API

## Format of different urls and format of attached data

### GET API

#### Get all transactions

> http://localhost:8080/expensia/transactions

#### Get transaction by id and type

> http://localhost:8080/expensia/transactions/1?type=expense

#### Add transaction

> http://localhost:8080/expensia/transactions
> Post Data format is

{
name: "correct Ctegoruy invested",
amount: 9999000.0,
date: "2024-01-20T12:30:45",
category: "ETF",
description: null,
type: "investment",
}

#### Update transaction

{
id: 1,
name: "hello from other side",
amount: 390000.0,
date: "2024-01-20T12:30:45",
category: "Food",
description:
"new test drom postman sout from incomeserrive updated print",
type: "expense",
}

### Delete transaction

> http://localhost:8080/expensia/transactions/1?type=expense
