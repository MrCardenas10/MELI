import {ReactElement} from "react";

export const BreadCrumbs = ({ category }: { category: Array<string> }): ReactElement => {
    return (
        <div className={"w-full my-4"}>
            {category.map((item, idx) => (
                <span key={item} className={`text-sm text-[#999999] ${!(category.length === (idx + 1)) ? "mr-2 font-normal" : "font-semibold"}`}>{`${item} ${!(category.length === (idx + 1)) ? `>` : ""}`}</span>
            ))}
        </div>
    )
}