import { mergeTypeDefs } from "@graphql-tools/merge";
import userTypeDef from "./userTypeDef";
import transactionTypeDef from "./transactionTypeDef";

const mergedTypeDefs = mergeTypeDefs([userTypeDef, transactionTypeDef])

export default mergedTypeDefs;