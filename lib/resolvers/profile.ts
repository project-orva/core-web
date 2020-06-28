import { read, update, create } from '../services/repository-ingress';

export default ({
    Query: {
        profile: (
            _: any, args: any, context: any,
        ) => read({
            repo: 'profile',
            serviceUri: context.serviceUri,
            identityToken: context.identityToken,
        }, args.id),
        profiles: (
            _: any, __: any, context: any,
        ) => read({
            repo: 'profile',
            serviceUri: context.serviceUri,
            identityToken: context.identityToken,
        })
    },
    Mutation: {
        updateProfile: (
            _: any, args: any, context: any,
        ) => update({
            repo: 'profile',
            serviceUri: context.serviceUri,
            identityToken: context.identityToken,
        }, args),
        createProfile: (
            _: any, args: any, context: any,
        ) => create({
            repo: 'profile',
            serviceUri: context.serviceUri,
            identityToken: context.identityToken,
        }, args)
    }
})