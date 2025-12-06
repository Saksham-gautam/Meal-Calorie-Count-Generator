"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { CalorieResponse } from "@/types"
import { Badge } from "@/components/ui/badge"
import { Flame, Utensils } from "lucide-react"

interface ResultCardProps {
    result: CalorieResponse
}

export function ResultCard({ result }: ResultCardProps) {
    return (
        <Card className="w-full mt-6 animate-in fade-in slide-in-from-bottom-4">
            <CardHeader>
                <div className="flex justify-between items-start">
                    <div>
                        <CardTitle className="text-2xl capitalize">{result.dish_name}</CardTitle>
                        <CardDescription>Source: {result.source}</CardDescription>
                    </div>
                    <Badge variant="secondary" className="text-lg">
                        {result.total_calories} kcal
                    </Badge>
                </div>
            </CardHeader>
            <CardContent>
                <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col items-center p-4 bg-muted rounded-lg">
                        <Utensils className="h-6 w-6 mb-2 text-primary" />
                        <span className="text-sm font-medium">Servings</span>
                        <span className="text-2xl font-bold">{result.servings}</span>
                    </div>
                    <div className="flex flex-col items-center p-4 bg-muted rounded-lg">
                        <Flame className="h-6 w-6 mb-2 text-orange-500" />
                        <span className="text-sm font-medium">Per Serving</span>
                        <span className="text-2xl font-bold">{result.calories_per_serving}</span>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}
