import {useQuery, UseQueryResult} from "@tanstack/react-query";
import axios from "axios";

const publicRequest = axios.create({
    baseURL: "http://localhost:5000/api"
});

const ITEMS_ENDPOINT = "/items"

type ProductItemAttr = {
    id: string,
        title: string,
    price: {
    currency: string,
        amount: number,
        decimals: number
},
    picture: string,
        condition: string,
    free_shipping: boolean
}

type UseGetProductListResponse = {
    author: {
        name: string,
        lastname: string
    },
    categories: Array<string>,
    items: Array<ProductItemAttr>
}

const useGetProductList = (
    search: string,
): UseQueryResult<UseGetProductListResponse> => {
    return useQuery<UseGetProductListResponse>({
            queryKey: ["product-list", search],
            queryFn: async () => {
                const response = await publicRequest.get<UseGetProductListResponse>(`${ITEMS_ENDPOINT}?search=${search}`);

                return response.data;
            },
        enabled: Boolean(search),

        },
    );
};

type UseGetProductDetailResponse = UseGetProductListResponse["author"] & {
    item: ProductItemAttr &
        {
        sold_quantity: number,
        description: string,
            category: string,
        }
}


const useGetProductDetail = (
    id: string,
): UseQueryResult<UseGetProductDetailResponse> => {
    return useQuery<UseGetProductDetailResponse>({
            queryKey: ["product-list", id],
            queryFn: async () => {
                const response = await publicRequest.get<UseGetProductDetailResponse>(`${ITEMS_ENDPOINT}/${id}`);

                return response.data;
            },
            enabled: Boolean(id),

        },
    );
};

export { useGetProductList, useGetProductDetail };
export type { UseGetProductListResponse, UseGetProductDetailResponse };