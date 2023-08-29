import { useState } from "react";

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Button } from "@/components/ui/button"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { toast } from "react-toastify";

interface QuestionProps {
    question?: string;
    name: string,
    onSelect: (name: string, item: number) => void
}

const FormSchema = z.object({
    type: z.enum(["all", "mentions", "none"], {
        required_error: "You need to select a notification type.",
    }),
})

export default function Question({ name, onSelect, question }: QuestionProps) {
    const [selected, setSelected] = useState(1);
    const setSelectedItem = (value: any) => {
        setSelected(value);
        onSelect(name, value);
    };

    function onSubmit(data: z.infer<typeof FormSchema>) {
        toast("You have selected " + data)
    }

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
    })

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-full h-full space-y-6 flex flex-col justify-center border-2 border-black">
                <FormField
                    control={form.control}
                    name="type"
                    render={({ field }) => (
                        <FormItem className="px-10 py-5 flex flex-col items-center space-y-3 border-2 border-yellow-500">
                            <FormLabel className="text-2xl">{question}</FormLabel>
                            {/*Onde fica as opções nesse carai*/}
                            <FormControl className="w-1/3 border-2 border-red-500">
                                <RadioGroup
                                    onValueChange={field.onChange}
                                    defaultValue={field.value}
                                    className="flex flex-col space-y-1 bg-zinc-500"
                                >
                                    <FormItem className="flex justify-start items-center space-x-3 space-y-0">
                                        <FormControl>
                                            {/*Value do radio group*/}
                                            <RadioGroupItem value="all" />
                                        </FormControl>
                                        <FormLabel className="font-normal text-base">
                                            All new messages
                                        </FormLabel>
                                    </FormItem>
                                </RadioGroup>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit">Submit</Button>
            </form>
        </Form>
    );
}