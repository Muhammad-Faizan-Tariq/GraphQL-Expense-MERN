const transactionTypeDef = `#graphql
 
 type Transaction {
    _id: ID!
    userId: ID!
    description: String!
    paymentType: String!
    category: String!
    amount: Float!
    location: String
    date: String!
 }

 type Query{
    transactions: [Transaction!]
    Transaction(transactionId: ID!): Transaction
 }

 type Mutation{
    CreateTransactionInput(input: CreateTransactionInput!): Transaction!
    UpdateTransactionInput(input: UpdateTransactionInput!): Transaction!
    deleteTransaction(transactionId: ID!): Transaction!
 }

 input CreateTransactionInput{
    description: String!
    paymentType: String!
    category: String!
    amount: Float!
    date: String!
    location: String
 }

 input UpdateTransactionInput{
    transactionId: ID!
    description: String
    paymentType: String
    category: String
    amount: String
    location: String
    date: String
 }
`

export default transactionTypeDef;