import { Metadata } from "next";
import { LoginForm } from "@/components/auth/LoginForm";

export const metadata: Metadata = {
    title: "Login | Meal Calorie Counter",
    description: "Login to your account to start tracking calories.",
};

export default function LoginPage() {
    return (
        <div className="flex min-h-screen items-center justify-center p-4 bg-background">
            <LoginForm />
        </div>
    );
}
