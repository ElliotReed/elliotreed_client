import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

export function EmailInput({ email, setEmail }: { email: string; setEmail: (v: string) => void }) {
    return (
        <div className="hp-input-group">
            <label htmlFor="email">Email</label>
            <input
                id="email"
                name="email"
                data-part="email-input"
                placeholder="me@example.com"
                required
                title="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                type="email"
            />
        </div>
    );
}

export function PasswordInput({ email }: { email: string }) {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="hp-input-group">
            <label htmlFor="password">Password</label>
            <div data-part="input-container">
                <input
                    id="password"
                    name="password"
                    data-part="password-input"
                    placeholder="Enter your password"
                    required
                    title="password"
                    type={showPassword ? "text" : "password"}
                />

                <button
                    data-part="show-password-button"
                    type="button"
                    title={showPassword ? "Hide password" : "Show password"}
                    onClick={() => setShowPassword((prev) => !prev)}
                >
                    {showPassword ? <Eye /> : <EyeOff />}
                </button>
            </div>
        </div>
    )
}

export function UsernameInput() {
    return (
        <div className="hp-input-group">
            <label htmlFor="username">Username (optional)</label>
            <input
                id="username"
                name="username"
                data-part="username"
                type="text"
                placeholder="Choose a username"
            />
        </div>
    )
}