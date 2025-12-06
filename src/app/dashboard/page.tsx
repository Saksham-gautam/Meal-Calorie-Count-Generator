"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { useAuthStore } from "@/stores/authStore"
import { useMealStore } from "@/stores/mealStore"
import { Header } from "@/components/layout/Header"
import { CalorieLookupForm } from "@/components/dashboard/CalorieLookupForm"
import { ResultCard } from "@/components/dashboard/ResultCard"
import { MealHistory } from "@/components/dashboard/MealHistory"

export default function DashboardPage() {
    const { isAuthenticated, user } = useAuthStore()
    const { currentMeal } = useMealStore()
    const router = useRouter()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    // Prevent flash of content during hydration
    if (!mounted) return null;

    return (
        <div className="min-h-screen flex flex-col bg-background">
            <Header />
            <main className="flex-1 container mx-auto p-4 md:p-8 space-y-8">
                <div className="flex flex-col space-y-2">
                    <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
                    <p className="text-muted-foreground">
                        Welcome back, {user?.first_name}. What are you eating today?
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-7">
                    <div className="col-span-4 lg:col-span-4 space-y-6">
                        <CalorieLookupForm />
                        {currentMeal && <ResultCard result={currentMeal} />}
                    </div>

                    <div className="col-span-4 lg:col-span-3 space-y-6">
                        <MealHistory />

                        <div className="p-6 border rounded-lg bg-muted/20">
                            <h3 className="font-medium mb-2">Tips</h3>
                            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                                <li>Enter accurate dish names for best results.</li>
                                <li>Servings can be decimals (e.g. 0.5).</li>
                                <li>Data is sourced from USDA logic (mocked or real).</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
