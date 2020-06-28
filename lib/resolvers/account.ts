import { read, update, create } from '../services/repository-ingress';

export default ({
    Query: {
        account: (
            _: any, args: any, context: any,
        ) => read({
            repo: 'account',
            serviceUri: context.serviceUri,
            identityToken: context.identityToken,
        }, args.id),
        accounts: (
            _: any, __: any, context: any,
        ) => read({
            repo: 'account',
            serviceUri: context.serviceUri,
            identityToken: context.identityToken,
        })
    },
    Mutation: {
        updateAccount: (
            _: any, args: any, context: any,
        ) => update({
            repo: 'account',
            serviceUri: context.serviceUri,
            identityToken: context.identityToken,
        }, args),
        createAccount: (
            _: any, args: any, context: any,
        ) => create({
            repo: 'account',
            serviceUri: context.serviceUri,
            identityToken: context.identityToken,
        }, args)
    }
})