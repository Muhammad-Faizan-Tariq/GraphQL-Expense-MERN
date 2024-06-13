import Transaction from "../models/transaction.js";

const transactionResolver = {
    Query: {

        transactions: async (_, __, context) => {
            try {
                
                if(!context.getUser()){
                    throw new Error("Unauthorized User")
                }
                const userId = await context.getUser()._id;
                const transactions = await Transaction.find({userId});
                return transactions;

            } catch (error) {
               console.error("Error in getting all transacitons:", error)
               throw new Error("Error in getting all transactions")
            }
        },

        transaction: async (_, {transactionId}) => {
            try {
                const transaction = await Transaction.findById(transactionId)
                return transaction;
            } catch (error) {
                console.error("Error in getting single transaciton:", error)
                throw new Error("Error in getting single transaction") 
            }
        }
    },



    Mutation: {

        createTransaction: async (_, {input}, context) => {
            try {
                const newTransaction = new Transaction({...input, userId:context.getUser()._id});
                await newTransaction.save();
                return newTransaction;
            } catch (error) {
                console.error("Error in creating transaciton:", error)
                throw new Error("Error in creating transaction")   
            }
        },

        updateTransaction: async (_, {input}) => {
            try {
                const updatedTransaction = await Transaction.findByIdAndUpdate(
                    input.transactionId, input, {new: ture}
                )
                return updatedTransaction;
            } catch (error) {
                console.error("Error in updating transaciton:", error)
                throw new Error("Error in updating transaction") 
            }
        },

        deleteTransaction: async (_, {transactionId}) => {
            try {
                const deleteTransaction = await Transaction.findByIdAndDelete(transactionId);
                return deleteTransaction;
            } catch (error) {
                console.error("Error in deleting transaciton:", error)
                throw new Error("Error in deleting transaction") 
            }
        }
    }
}

export default transactionResolver