import {Fragment, ReactElement} from "react";
import {Button} from "./button.tsx";
import {BreadCrumbs} from "./bread-crumbs.tsx";

export const ProductDetail = (): ReactElement => {
    return (
        <Fragment>
            <BreadCrumbs category={["Electronica, Audio y Video", "iPod", "Reproductores","iPod touch", "32GB"]} />
            <div className={"w-full h-11/12 bg-white rounded-sm p-2 flex flex-col"}>
                <div className={"flex w-full"}>
                    <div className={"w-4/6 h-[580px] flex justify-center rounded-[2px]"}>
                        <img src="/src/assets/images/xiaomi.webp" className={"w-full h-5/6"} alt="xiaomi"/>
                    </div>
                    <div className={"flex flex-col w-2/6 items-start px-8"}>
                        <p className={"mt-8 text-[#666666] text-sm"}>Nuevo - 243 vendidos</p>
                        <p className={"mt-4 font-bold text-2xl"}>Deco Reverse Sombrero Oxford</p>
                        <p className={"mt-8 text-5xl font-normal"}>$ {`1980`.replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</p>
                        <Button className={"bg-[#3483FA] mt-8 w-full text-white h-12 rounded-md"}>Comprar</Button>
                    </div>
                </div>
                <div className={"flex flex-col w-4/6 ml-8"}>
                    <span className={"font-normal text-3xl mb-8"}>Description del producto</span>
                    <span className={"text-[#999999] text-sm break-norma mb-8"}>
                       The Scarpe si Bianco Italian Footwear collection was founded by Bill White in 2009. Di Bianco offers Classic handmade men's shoes whith a modern twist. The combination of timeless models and details with contemporaty colors and styling, results in decidedly current, yet, elegant models. The aim of the Scarpe di Bianco company is to offer men a custom shoe buying experience through a multitude of models, last soles, leathers, and color options
                    </span>
                </div>
            </div>
        </Fragment>
    )
}