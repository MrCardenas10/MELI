const buttonSizes = {
    sm: [
        "text-xs px-2.5 py-1.5",
        {
            leftIcon: "-ml-0.5 mr-2 h-4 w-4",
            rightIcon: "ml-2 -mr-0.5 h-4 w-4"
        }
    ],
    md: [
        "text-sm leading-4 px-3 py-1.5",
        {
            leftIcon: "-ml-0.5 mr-2 h-4 w-4",
            rightIcon: "ml-2 -mr-0.5 h-4 w-4"
        }
    ],
    lg: [
        "text-base px-4 py-1.5",
        {
            leftIcon: "-ml-1 mr-3 h-5 w-5",
            rightIcon: "ml-3 -mr-1 h-5 w-5"
        }
    ]
} as const;

export { buttonSizes }