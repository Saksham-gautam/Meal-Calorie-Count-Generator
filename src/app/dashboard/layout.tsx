import { Metadata } from "next";
import { AuthGuard } from "@/components/layout/AuthGuard"

export const metadata: Metadata = {
    title: "Dashboard | Meal Calorie Counter",
    description: "Track and analyze your meal calories.",
};




export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <AuthGuard>{children}</AuthGuard>
}
