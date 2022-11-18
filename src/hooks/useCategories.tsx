import React, { useState, useEffect } from 'react'
import { View, Text } from 'react-native'
import cafeAPI from '../api/cafeAPI';
import { Categoria, CategoriesResponse } from '../interfaces/appInterfaces';

const useCategories = () => {


    const [isLoading, setIsLoading] = useState(true);

    const [categories, setCategories] = useState<Categoria[]>([]);

    useEffect(() => {
        getCategories();


    }, [])
    const getCategories = async () => {
        const resp = await cafeAPI.get<CategoriesResponse>('/categorias');
        setCategories(resp.data.categorias);
        setIsLoading(false);

    }

    return {
        categories,
        isLoading
    }
}

export default useCategories
