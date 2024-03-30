import { Fragment, ReactElement, useMemo } from "react";
import { Divider } from "./divider.tsx";
import { useNavigate, useSearchParams } from "react-router-dom";

const itemsData = {
  author: {
    name: "Estiven",
    lastname: "Cardenas",
  },
  categories: ["celular", "iphone", "32GB"],
  items: [
    {
      id: "testid",
      title: "Apple iPhone 13 (128 GB) - Azul - Distribuidor autorizado",
      price: {
        currency: "USD",
        amount: 1920,
        decimals: 0,
      },
      picture: "picture",
      condition: "New",
      free_shipping: true,
    },
    {
      id: "testid2",
      title:
        "Apple iPhone 14 Plus 256gb Con Pantalla Táctil Color Amarillo Busca Que Todo Se Vea Más Nítido Y Real",
      price: {
        currency: "USD",
        amount: 2203,
        decimals: 0,
      },
      picture: "picture",
      condition: "New",
      free_shipping: true,
    },
    {
      id: "testid334",
      title: "Moto G84 5G Dual SIM 256 GB viva magenta 8 GB RAM",
      price: {
        currency: "USD",
        amount: 1230,
        decimals: 0,
      },
      picture: "picture",
      condition: "New",
      free_shipping: true,
    },
  ],
};

export const ProductsList = (): ReactElement => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const searchUrlValue = useMemo(
    () => searchParams.get("search"),
    [searchParams],
  );
  console.log(searchUrlValue);
  const onClickProductDetail = (id: string) => {
    navigate(`/items/${id}`);
  };

  return (
    <div className={"w-full h-5/6 bg-white mt-8 rounded-sm p-2"}>
      {itemsData.items.map((product, idx) => (
        <Fragment key={product.id}>
          <div
            className={"flex w-full cursor-pointer"}
            onClick={() => {
              onClickProductDetail(product.id);
            }}
          >
            <div
              className={"w-[180px] h-[180px] mx-4 bg-red-500 rounded-[4px]"}
            >
              <img src="/src/assets/images/xiaomi.webp" alt="xiaomi" />
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
          {!(itemsData.items.length === idx + 1) && (
            <Divider className={"h-[1px] my-4 w-full bg-[#EEEEEE]"} />
          )}
        </Fragment>
      ))}
    </div>
  );
};
