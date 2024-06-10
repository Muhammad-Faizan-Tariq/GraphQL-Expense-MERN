import { mergeResolvers, mergeResolvers } from "@graphql-tools/merge";
import userResolver from "./userResolver";
import transactionResolver from "./transactionResolver";

const mergedResolvers = mergeResolvers([userResolver, transactionResolver])

export default mergedResolvers;