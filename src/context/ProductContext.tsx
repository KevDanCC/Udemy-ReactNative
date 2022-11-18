import { createContext, useEffect, useState } from "react";
import cafeAPI from "../api/cafeAPI";
import { Producto, ProductsResponse } from "../interfaces/appInterfaces";


type ProductsContextProps = {
    products: Producto[];
    loadProducts: () => Promise<void>;
    addProduct: (categoryId: string, productName: string) => Promise<Producto>;
    updateProduct: (categoryId: string, productName: string, productId: string) => Promise<void>;
    deleteProduct: (id: string) => Promise<void>;
    loadProductById: (id: string) => Promise<Producto>;
    uploadImage: (data: any, id: string) => Promise<void>;

}

export const ProductsContext = createContext({} as ProductsContextProps);


export const ProductsProvider = ({ children }: any) => {

    const [products, setProducts] = useState<Producto[]>([]);


    useEffect(() => {

        loadProducts();
    }, [])



    const loadProducts = async () => {


        const resp = await cafeAPI.get<ProductsResponse>('/productos?limite=50');
        setProducts([...resp.data.productos]);

    }
    const addProduct = async (categoryId: string, productName: string): Promise<Producto> => {

        const resp = await cafeAPI.post<Producto>('/productos', {
            nombre: productName,
            categoria: categoryId
        });
        setProducts([...products, resp.data])
        return resp.data;


    }
    const updateProduct = async (categoryId: string, productName: string, productId: string) => {
        const resp = await cafeAPI.put<Producto>(`/productos/${productId}`, {
            nombre: productName,
            categoria: categoryId
        });
        setProducts(
            products.map(uniqueProd => {
                return (uniqueProd._id === productId)
                    ? resp.data
                    : uniqueProd
            })
        )
    }
    const deleteProduct = async (id: string) => {

    }
    const loadProductById = async (id: string): Promise<Producto> => {
        const resp = await cafeAPI.get<Producto>(`/productos/${id}`);
        return resp.data


    }
    const uploadImage = async (data: any, id: string) => {

    }

    return (
        <ProductsContext.Provider value={{
            products,
            loadProducts,
            addProduct,
            updateProduct,
            deleteProduct,
            loadProductById,
            uploadImage,
        }}>

            {children}
        </ProductsContext.Provider>
    )
}

