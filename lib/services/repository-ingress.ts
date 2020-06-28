import axios from 'axios';

export interface IngresConfig {
    repo: string,
    serviceUri: string,
    identityToken: string,
}

export const create = async <T>({
    repo,
    serviceUri,
    identityToken,
}: IngresConfig, requestData: any): Promise<T> => {
    const { data } = await axios.post(
        `${serviceUri}/${repo}`,
        requestData,
        {
            headers: {
                'x-identity': identityToken,
            }
        },
    )

    return data;
}

export const update = async <T>({
    repo,
    serviceUri,
    identityToken,
}: IngresConfig, requestData: object): Promise<T> => {
    const { data } = await axios.put(
        `${serviceUri}/${repo}`,
        requestData,
        {
            headers: {
                'x-identity': identityToken,
            }
        },
    )

    return data;
}

export const read = async <T>({
    repo,
    serviceUri,
    identityToken,
}: IngresConfig, entityId?: string): Promise<T> => {
    const params = (entityId) ? `id=${entityId}` : ""

    const { data } = await axios.get(
        `${serviceUri}/${repo}${params}`,
        {
            headers: {
                'x-identity': identityToken,
            }
        },
    )

    return data.rows
}


export const deleteEntry = () => async <T>({
    repo,
    serviceUri,
    identityToken,
}: IngresConfig, entityId: string): Promise<T> => {
    const { data } = await axios.delete(
        `${serviceUri}/${repo}?id=${entityId}?id=${entityId}`,
        {
            headers: {
                'x-identity': identityToken,
            }
        },
    )

    return data;
}
