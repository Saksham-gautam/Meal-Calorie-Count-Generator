"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Loader2, Search } from "lucide-react"
import { useMealStore } from "@/stores/mealStore"
import { useEffect } from "react"
import { toast } from "sonner"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

const formSchema = z.object({
    dish_name: z.string().min(2, "Dish name is required"),
    servings: z.coerce.number().min(0.1, "At least 0.1 servings"), // coerce to handle number input
})

export function CalorieLookupForm() {
    const { fetchCalories, loading, error, clearError } = useMealStore()

    // Clear error on mount
    useEffect(() => {
        clearError()
    }, [clearError])

    // Show error toast if error state changes
    useEffect(() => {
        if (error) {
            toast.error(error)
        }
    }, [error])

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            dish_name: "",
            servings: 1,
        },
    })

    async function onSubmit(values: z.infer<typeof formSchema>) {
        await fetchCalories(values.dish_name, values.servings)
    }

    return (
        <Card className="w-full">
            <CardHeader>
                <CardTitle>Check Calories</CardTitle>
                <CardDescription>Enter a dish name and servings to get calorie info.</CardDescription>
            </CardHeader>
            <CardContent>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                        <div className="flex flex-col md:flex-row gap-4">
                            <FormField
                                control={form.control}
                                name="dish_name"
                                render={({ field }) => (
                                    <FormItem className="flex-1">
                                        <FormLabel>Dish Name</FormLabel>
                                        <FormControl>
                                            <Input placeholder="e.g. Chicken Biryani" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="servings"
                                render={({ field }) => (
                                    <FormItem className="w-full md:w-32">
                                        <FormLabel>Servings</FormLabel>
                                        <FormControl>
                                            <Input type="number" step="0.1" {...field} value={field.value as number} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <Button type="submit" className="w-full" disabled={loading}>
                            {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Search className="mr-2 h-4 w-4" />}
                            Get Calories
                        </Button>
                    </form>
                </Form>
            </CardContent>
        </Card>
    )
}
