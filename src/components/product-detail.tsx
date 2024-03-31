import {Fragment, ReactElement} from "react";
import {Button} from "./button.tsx";
import {BreadCrumbs} from "./bread-crumbs.tsx";
import {useGetProductDetail} from "../services";
import {Skeleton} from "./skeleton.tsx";
import {useParams} from "react-router-dom";

const ProductDetail = (): ReactElement => {
    const {id } = useParams();
    const { data, isLoading } = useGetProductDetail(id ?? "");

    if (isLoading) {
        return (
            <div className={"w-full flex flex-col justify-center items-center h-1/6 bg-white mt-8 rounded-sm p-2"}>
                <Skeleton width="w-full h-12" />
                <Skeleton width="w-full my-5 h-12" />
                <Skeleton width="w-full h-12" />
            </div>
        )
    }

    return (
        <Fragment>
            <BreadCrumbs category={[data?.item.category || ""]} />
            <div className={"w-full h-11/12 bg-white rounded-sm p-2 flex flex-col"}>
                <div className={"flex w-full"}>
                    <div className={"w-4/6 h-[580px] flex justify-center rounded-[2px]"}>
                        <img src={data?.item.picture} className={"w-full h-5/6"} alt="image"/>
                    </div>
                    <div className={"flex flex-col w-2/6 items-start px-8"}>
                        <p className={"mt-8 text-[#666666] text-sm"}>{data?.item.condition} - {data?.item.sold_quantity} vendidos</p>
                        <p className={"mt-4 font-bold text-2xl"}>{data?.item.title}</p>
                        <p className={"mt-8 text-5xl font-normal"}>$ {data?.item.price.amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</p>
                        <Button className={"bg-[#3483FA] mt-8 w-full text-white h-12 rounded-md"}>Comprar</Button>
                    </div>
                </div>
                <div className={"flex flex-col w-4/6 ml-8"}>
                    <span className={"font-normal text-3xl mb-8"}>Description del producto</span>
                    <span className={"text-[#999999] text-sm break-norma mb-8"}>
                       {data?.item.description}
                    </span>
                </div>
            </div>
        </Fragment>
    )
};

export default ProductDetail