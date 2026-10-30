type SubmitButtonProps = {
    children?: React.ReactNode;
    icon?: React.ReactNode;
    iconPosition?: "start" | "end";
    isLoading?: boolean;
    disabled?: boolean;
    loadingComponent?: React.ReactNode;
};

export function SubmitButton({
    children,
    icon,
    iconPosition = "start",
    isLoading = false,
    disabled = false,
    loadingComponent = <span aria-hidden="true">…</span>,
}: SubmitButtonProps) {
    return (
        <button
            type="submit"
            disabled={isLoading || disabled}
            data-part="submit-button"
        >
            {isLoading && loadingComponent}
            {!isLoading && icon && iconPosition === "start" && (
                <span aria-hidden="true">{icon}</span>
            )}
            <span>{children}</span>
            {!isLoading && icon && iconPosition === "end" && (
                <span aria-hidden="true">{icon}</span>
            )}
        </button>
    );
}