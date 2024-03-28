import {ReactElement, useState} from "react";
import {SearchBar} from "./components/search-bar.tsx";

export const Root = (): ReactElement => {
    const [searchValue, setSearchValue] = useState("");
    return (
        <div>
            <div id="sidebar">
                <SearchBar value={searchValue} />
                <nav>
                    <ul>
                        <li>
                            <a href={`/items`}></a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}