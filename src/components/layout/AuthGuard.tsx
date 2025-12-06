"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { useAuthStore } from "@/stores/authStore"
import { Loader2 } from "lucide-react"

export function AuthGuard({ children }: { children: React.ReactNode }) {
    const router = useRouter()
    const { isAuthenticated } = useAuthStore()
    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        setIsClient(true)
    }, [])

    useEffect(() => {
        if (isClient && !isAuthenticated) {
            router.push("/login")
        }
    }, [isClient, isAuthenticated, router])

    // Show loading state while checking auth on client
    if (!isClient) {
        return (
            <div className="flex h-screen w-full items-center justify-center">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </div>
        )
    }

    // If client loaded and not authenticated, render nothing (will redirect)
    if (!isAuthenticated) {
        return null
    }

    // Authenticated
    return <>{children}</>
}
