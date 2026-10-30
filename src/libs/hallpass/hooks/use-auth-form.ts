import { useState } from "react";

export function useAuthForm() {
    const [email, setEmail] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState<string | null>(null);

    return { email, setEmail, isSubmitting, setIsSubmitting, error, setError };
}