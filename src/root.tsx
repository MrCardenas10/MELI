import {ReactElement, useState} from "react";
import {SearchBar} from "./components/search-bar.tsx";
import {Outlet} from "react-router-dom";

export const Root = (): ReactElement => {
    const [searchValue, setSearchValue] = useState("");

    return (
        <div className={"relative h-screen w-full overflow-y-hidden"}>
            <div id="w-full h-full">
                <SearchBar value={searchValue} setValue={setSearchValue} />
                <div className={"flex justify-center bg-[#EEEEEE] w-full h-screen"}>
                    <div className={"w-9/12"}>
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    );
}