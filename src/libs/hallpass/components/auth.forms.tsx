
import { useAuthForm } from "../hooks/use-auth-form";
import { EmailInput, PasswordInput, UsernameInput } from "./auth.inputs";
import { SubmitButton } from "./submit-button";

import "./hallpass.css";
import { AuthService } from "../services/auth.service";
import { setUser } from "..";

type SubmitButtonOverrides = {
  className?: string;
  loadingComponent?: React.ReactNode;
  icon?: React.ReactNode;
  iconPosition?: "start" | "end";
};

type FormProps = {
  className?: string;
  submitButton?: SubmitButtonOverrides;
};

type FormPropsWithNavigate = FormProps & {
  navigate: (path: string) => void;
  redirectTo?: string;
};

export function SignInForm({
  navigate,
  redirectTo = "/dasboard",
  submitButton,
  className,
}: FormPropsWithNavigate) {
  const { email, setEmail, isSubmitting, setIsSubmitting, error, setError } = useAuthForm();

  async function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const password = formData.get("password") as string;

    try {
      const response = await AuthService.signIn({ email, password });
      setUser(response);
      navigate(redirectTo);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Sign in failed");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className={`hp-auth-form ${className}`}>
      <header>Sign In</header>
      <div data-part="content">
        <EmailInput email={email} setEmail={setEmail} />
        <PasswordInput email={email} />
        <p>Forgot password?
          <a href={`/reset-password/?email=${email}`}> Reset password</a>
        </p>
        {error && <p data-part="error">{error}</p>}
        <SubmitButton
          isLoading={isSubmitting}
          {...submitButton}
        >
          Sign In
        </SubmitButton>
      </div>
      <footer>
        <span>Don't have an account?</span>
        <a href="/create-account">Create one</a>
      </footer>
    </form>
  );
}


export function CreateAccountForm({
  navigate,
  redirectTo = "/dasboard",
  submitButton,
  className,
}: FormPropsWithNavigate) {
  const { email, setEmail, isSubmitting, setIsSubmitting, error, setError } = useAuthForm();

  async function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const password = formData.get("password") as string;
    const username = formData.get("username") as string;

    try {
      const response = await AuthService.signUp({ email, password, username });
      setUser(response);
      navigate(redirectTo);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Sign in failed");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className={`hp-auth-form ${className}`}>
      <header>Create Account</header>
      <div data-part="content">
        <EmailInput email={email} setEmail={setEmail} />
        <PasswordInput email={email} />
        <UsernameInput />
        {error && <p data-part="error">{error}</p>}
        <SubmitButton
          isLoading={isSubmitting}
          {...submitButton}
        >
          Create Account
        </SubmitButton>
        <footer>
          <span>Already have an account?</span>
          <a href="/sign-in">Sign In</a>
        </footer>
      </div>
    </form>
  );
}

// General Copy needs to be worked on
export function ResetPasswordForm({
  submitButton,
  className,
}: FormProps) {
  const { email, setEmail, isSubmitting, setIsSubmitting, error, setError } = useAuthForm();

  async function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const password = formData.get("password") as string;

    try {
      await AuthService.signIn({ email, password });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Sign in failed");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className={`hp-auth-form ${className}`}>
      <header>Reset Password</header>
      <div data-part="content">
        <EmailInput email={email} setEmail={setEmail} />
        {error && <p data-part="error">{error}</p>}
        <SubmitButton isLoading={isSubmitting} {...submitButton}>
          Send Reset Link
        </SubmitButton>
        <footer>
          <span>Remember your password?</span>
          <a href="/sign-in">Sign In</a>
        </footer>
      </div>
    </form>
  );
}
