import {ReactElement} from "react";
import {SearchBar} from "./components/search-bar.tsx";

export const Root = (): ReactElement => {
    return (
        <div>
            <div id="sidebar">
                <SearchBar />
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