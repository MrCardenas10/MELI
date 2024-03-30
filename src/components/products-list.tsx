import {Fragment, ReactElement, useMemo} from "react";
import { Divider } from "./divider.tsx";
import { useNavigate, useSearchParams } from "react-router-dom";
import {useGetProductList} from "../services";
import {Skeleton} from "./skeleton.tsx";
import {BreadCrumbs} from "./bread-crumbs.tsx";

export const ProductsList = (): ReactElement => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const searchUrlValue = useMemo(
    () => searchParams.get("search"),
    [searchParams],
  );
  const { data, isLoading } = useGetProductList(searchUrlValue ?? "");
    const categories = useMemo(
        () => data?.categories,
        [data],
    );
  const onClickProductDetail = (id: string) => {
    navigate(`/items/${id}`);
  };

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
          <BreadCrumbs category={categories || []} />
            <div className={"w-full h-6/6 bg-white mt-8 rounded-sm p-2"}>
              {data?.items.map((product, idx) => (
                <Fragment key={product.id}>
                  <div
                    className={"flex w-full cursor-pointer"}
                    onClick={() => {
                      onClickProductDetail(product.id);
                    }}
                  >
                    <div
                      className={"w-[180px] h-[180px] mx-4 rounded-[4px] flex items-center"}
                    >
                      <img src={product.picture} className={"w-11/12 h-11/12"} alt="xiaomi" />
                    </div>
                    <div className={"flex flex-col w-6/12 h-40 justify-center"}>
                      <span className={"font-normal text-[#333333] text-2xl mb-8"}>
                        ${" "}
                        {product.price.amount
                          .toString()
                          ?.replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                      </span>
                      <span className={"font-normal text-[#666666] text-lg"}>
                        {product.title}
                      </span>
                    </div>
                    <div className={"flex w-6/12 justify-center h-32 items-center"}>
                      <span className={"text-[#999999] text-sm"}>
                        {product.condition}
                      </span>
                    </div>
                  </div>
                  {!(data?.items.length === idx + 1) && (
                    <Divider className={"h-[1px] my-4 w-full bg-[#EEEEEE]"} />
                  )}
                </Fragment>
              ))}
            </div>
      </Fragment>
  );
};
