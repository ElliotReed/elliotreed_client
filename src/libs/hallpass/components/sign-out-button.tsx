// sign-out-button.tsx
import { clearAuth } from "..";
import { AuthService } from "../services/auth.service";

type SignOutButtonProps = {
    children?: React.ReactNode;
    className?: string;
    navigate: (path: string) => void;
}

const SIGN_IN_PATH = "/sign-in?message=signed-out";

export function SignOutButton({
    children = "Sign Out",
    className,
    navigate,
    ...rest
}: SignOutButtonProps) {
    async function handleSignOut() {
        await AuthService.signOut();
        clearAuth();
        navigate(SIGN_IN_PATH);
    }

    return (
        <button
            type="button"
            onClick={handleSignOut}
            className={className}
            {...rest}
        >
            {children}
        </button>
    );
}