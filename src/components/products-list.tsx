import {ReactElement} from "react";
import {Outlet} from "react-router-dom";

export const ProductsList = (): ReactElement => {
    return (

        <div>Product List
    <Outlet />  
    </div>)
}