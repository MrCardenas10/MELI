import {ReactElement} from "react";

type ISearchBar = {
    value: string;
    onChange: () => void;
}

export const SearchBar = ({ value, onChange }: ISearchBar): ReactElement => {

    return (
        <div className={"bg-amber-400"}>
            <input type="text" placeholder={"Search"} onChange={onChange} value={value} />
        </div>
    )
}