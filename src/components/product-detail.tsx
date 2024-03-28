import {ReactElement} from "react";
import {Outlet} from "react-router-dom";

export const ProductDetail = (): ReactElement => {
    return (<div>Product detail
        <Outlet />

    </div>)
}