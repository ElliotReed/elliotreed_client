import {
    createAccountAction,
    resetPasswordAction,
    signInAction,
} from "./reactRouter/actions/auth.actions";
import {
    CreateAccountForm,
    ResetPasswordForm,
    SignInForm,
} from "./components/auth.forms";
import { resetPasswordLoader } from "./reactRouter/loaders/auth.loaders";

export const hallpassReactRouter = {
    actions: {
        createAccountAction,
        resetPasswordAction,
        signInAction,
    },
    loaders: { resetPasswordLoader },
    forms: {
        CreateAccountForm,
        ResetPasswordForm,
        SignInForm,
    },
}