import { useAuthProvider } from 'react-admin';
import { CustomAuthProviderMethods } from './authProvider';
import { useEffect } from 'react';

const THIRTY_MINUTES = 1000 * 60 * 30;
export const RefreshToken = () => {
    const authProvider = useAuthProvider<CustomAuthProviderMethods>();

    useEffect(() => {
        const interval = useInterval(() => authProvider.refreshToken(), THIRTY_MINUTES);
        return () => clearInterval(interval);
    }, [authProvider]);

    return null;
};