import {
    contextBridge,
} from "electron";
import {
    ApiClient
} from '@twurple/api';
import {
    ClientCredentialsAuthProvider
} from '@twurple/auth';

const clientId = "clientid"
const clientSecret = "secretid"
const authProvider = new ClientCredentialsAuthProvider(clientId, clientSecret);
const apiClient = new ApiClient({
    authProvider,
    preAuth: true,
    logger: {
        minLevel: 'DEBUG'
    }
});

contextBridge.exposeInMainWorld("twitch", {
    getChannel: async (userId) => {
        const user = await apiClient.users.getUserByName(userId);
        const {
            displayName,
            name
        } = user
        return {
            displayName,
            name
        }
    }
})