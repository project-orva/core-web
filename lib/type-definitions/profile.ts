import { gql } from 'apollo-server';

export default gql`
    type Profile {
        id: String,
        firstName: String,
        lastName: String,
    }

    type Query {
        profile: Profile
        profiles: [Profile]
    }

    type Mutation {
        updateProfile: Boolean
        createProfile: Boolean 
    }
`;