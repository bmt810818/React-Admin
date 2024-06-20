import { useState, useEffect } from 'react';
import {useDataProvider, useGetOne} from 'react-admin';
import {Loading} from "../loadings/Loading";
import {Error} from "../errors/Error";

export const UserProfile = ({ userId }) => {
    const { isPending, error, data: user } = useGetOne('users', { id: userId });
    const dataProvider = useDataProvider();
    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();

    useEffect(() => {
        dataProvider.getOne('users', { id: userId })
            .then(({ data }) => {
                setUser(data);
                setLoading(false);
            })
            .catch(error => {
                setError(error);
                setLoading(false);
            })
    }, []);

    if (loading) return  <Loading />;
    if (error) return <Error />;
    if (!user) return null;

    return (
        <ul>
            <li>Name: {user.name}</li>
            <li>Email: {user.email}</li>
        </ul>
    )
};