import {Dispatch, ReactElement, SetStateAction} from "react";
import {Button} from "./button.tsx";
import {IconSearch} from "../assets/icons/icon-search.tsx";
import {createSearchParams, useNavigate} from "react-router-dom";

type ISearchBar = {
    value: string;
    setValue: Dispatch<SetStateAction<string>>
}

export const SearchBar = ({ value, setValue }: ISearchBar): ReactElement => {

    const navigate = useNavigate();
    const handleClickSearch = (): void => {
        navigate({
            pathname: "items",
            search: `?${createSearchParams({
                search: value
            })}`
        });
    }

    const goHome = () => {
        navigate("/")
    }

    return (
        <div className={"flex w-full justify-center items-center bg-[#FFE600] h-12"}>
            <div className="flex justify-center items-center w-3/4">
                <div className={"w-12 h-9 mr-6"}>
                <img src="/src/assets/images/Logo_ML.png" className={"w-full h-full cursor-pointer"} alt="MELI" onClick={goHome}/>
                </div>
            <input type="text" className={"pl-3 py-1 rounded-sm w-2/3 focus:outline-none"} placeholder={"Nunca dejes de buscar"} onChange={({ target }) => {
                setValue(target.value)
            }} value={value} />
                <button className={"w-8 h-8 bg-[#EEEEEE] rounded-sm flex justify-center items-center -ml-1"} type={"button"} onClick={handleClickSearch}><IconSearch /></button>
            </div>
        </div>
    )
}