"use client"

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { useMealStore } from "@/stores/mealStore"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

// I didn't install date-fns, I'll use native Intl.DateTimeFormat
const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
}

export function MealHistory() {
    const { history } = useMealStore()

    if (history.length === 0) return null

    return (
        <Card>
            <CardHeader>
                <CardTitle>Recent searches</CardTitle>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Dish</TableHead>
                            <TableHead>Cals</TableHead>
                            <TableHead className="text-right">Time</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {history.map((meal) => (
                            <TableRow key={meal.id}>
                                <TableCell className="font-medium capitalize">{meal.dish_name}</TableCell>
                                <TableCell>{meal.total_calories}</TableCell>
                                <TableCell className="text-right text-muted-foreground">{formatDate(meal.timestamp)}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    )
}
