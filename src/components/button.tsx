import { buttonSizes } from "./common";
import { forwardRef } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

type ButtonBaseProps = {
    children?: React.ReactNode;
    block?: boolean;
    rounded?: boolean;
    rightIcon?: React.VFC<{ className?: string }>;
    leftIcon?: React.VFC<{ className?: string }>;
    size?: keyof typeof buttonSizes;
};

type ButtonProps = {
    id?: string;
    type?: "submit" | "button" | "reset";
    status?: "loading" | "default";
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    onMouseOver?: React.MouseEventHandler<HTMLButtonElement>;
    onFocus?: React.FocusEventHandler<HTMLButtonElement>;
    border?: boolean;
    className?: string;
    dataTestId?: string;
} & ButtonBaseProps;

/**
 * @param {string} width TailwindCSS width utility class
 */
const Button = forwardRef(
    (
        {
            children,
            leftIcon: LeftIcon,
            rightIcon: RightIcon,
            block = false,
            rounded = false,
            size = "md",
            id = "",
            status = "default",
            type = "submit",
            onFocus,
            onMouseOver,
            onClick,
            border = true,
            className,
            dataTestId
        }: ButtonProps,
        ref: React.Ref<HTMLButtonElement>
    ): React.ReactElement => (
        <button
            id={id}
            ref={ref}
            type={type}
            onFocus={onFocus}
            data-testid={dataTestId}
            onMouseOver={onMouseOver}
            onClick={onClick}
            disabled={status === "default" ? false : true}
            className={`${block ? "flex w-full" : "inline-flex"} ${
                rounded ? "rounded-full" : "rounded-sm"
            } ${buttonSizes[size][0]} items-center justify-center transition-colors ${
                border ? "border" : "border-0"
            } font-medium focus:outline-none focus:ring-2 focus:ring-primary-300 ${className || ""}`}
        >
            {status === "loading" ? (
                <AiOutlineLoading3Quarters className={`${buttonSizes[size][1]["leftIcon"]} animate-spin`} />
            ) : LeftIcon ? (
                <LeftIcon className={buttonSizes[size][1]["leftIcon"]} />
            ) : null}
            {children}
            {status === "loading" ? null : RightIcon ? (
                <RightIcon className={buttonSizes[size][1]["rightIcon"]} />
            ) : null}
        </button>
    )
);

/* c8 ignore next */
if (import.meta.env.DEV) {
    Button.displayName = "Button";
}

export { Button };
export type { ButtonProps };
