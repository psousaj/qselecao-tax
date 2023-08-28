import { useState } from "react";
import { List, ListItem, Card } from "@material-tailwind/react";

interface QuestionProps {
    question?: string;
    name: string,
    onSelect: (name: string, item: number) => void
}

export default function Question({ name, onSelect, question }: QuestionProps) {
    const [selected, setSelected] = useState(1);
    const setSelectedItem = (value: any) => {
        setSelected(value);
        onSelect(name, value);
    };

    return (
        <Card className="w-96">
            <List>
                <ListItem selected={selected === 1} onClick={() => setSelectedItem(1)}>
                    Inbox
                </ListItem>
                <ListItem selected={selected === 2} onClick={() => setSelectedItem(2)}>
                    Trash
                </ListItem>
                <ListItem selected={selected === 3} onClick={() => setSelectedItem(3)}>
                    Settings
                </ListItem>
                <ListItem selected={selected === 3} onClick={() => setSelectedItem(3)}>
                    Settings
                </ListItem>
            </List>
        </Card>
    );
}