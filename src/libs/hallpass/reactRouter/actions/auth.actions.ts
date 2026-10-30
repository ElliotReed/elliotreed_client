import { redirect } from "react-router";

import { AuthService } from "../../services/auth.service";
import type { Route } from "../../../../+types/root";
import { getIsAuthenticated, setToken, setUser } from "../..";

export async function signInAction({ request }: Route.ClientActionArgs) {
    const formData = await request.formData();
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const url = new URL(request.url);
    const from = url.searchParams.get("from") || "/organizer";
    try {
        const response = await AuthService.signIn({ email, password })

        const accessToken = response.headers["authorization"]?.replace("Bearer ", "");

        if (accessToken) {
            setToken(accessToken);
            setUser(response.data.data);
        }

    } catch (error) {
        return { error: "Invalid email or password" };
    }
    const isAuthenticated = getIsAuthenticated();

    throw redirect(from);  // Redirect on success
}

export async function createAccountAction({ request }: Route.ClientActionArgs) {
    const formData = await request.formData();
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const username = formData.get("username") as string;

    try {
        const response = await AuthService.signUp({ username, email, password })


    } catch (error) {
        return { error: "Invalid email or password" };
    }

    // throw redirect(from);  // Redirect on success
}
export async function resetPasswordAction({ request }: Route.ClientActionArgs) {
    // const formData = await request.formData();
    // const email = formData.get("email") as string;
    // const password = formData.get("password") as string;
    // const username = formData.get("username") as string;

    try {
        //     const response = await AuthService.signUp({ username, email, password })


    } catch (error) {
        return { error: "Invalid email or password" };
    }

    // throw redirect(from);  // Redirect on success
}