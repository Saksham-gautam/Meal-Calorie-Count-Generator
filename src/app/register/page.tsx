import { Metadata } from "next";
import { RegisterForm } from "@/components/auth/RegisterForm";

export const metadata: Metadata = {
    title: "Register | Meal Calorie Counter",
    description: "Create a new account to start tracking calories.",
};




export default function RegisterPage() {
    return (
        <div className="flex min-h-screen items-center justify-center p-4 bg-background">
            <RegisterForm />
        </div>
    );
}
