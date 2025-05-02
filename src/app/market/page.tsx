import TemplateCard from "@/components/TemplateCard";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { categories, categoryLabels, Template } from "@/types/template";
import { Search } from "lucide-react";

export default function Market() {
    const templates = new Array(30).fill(null).map((_, i) => ({
        name: `Template ${i + 1}`,
        description: [{
            type: "text",
            text: "This is a description of the template. It provides a brief overview of what the template is about and its features.",
        }],
        image: `https://picsum.photos/1600/900?i=${i}`,
        category: categories[Math.floor(Math.random() * categories.length)],
        price: Math.random() * 100,
    } satisfies Template));

    return (
        <div className="flex min-h-screen bg-background text-foreground flex-col">
            <header className="sticky top-0 z-10 bg-background border-b border-border px-4 py-3">
              <div className="flex items-center justify-between max-w-5xl mx-auto gap-4">
                <div className="relative w-full max-w-md hidden md:block">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input
                    type="text"
                    placeholder="Search for templates..."
                    className="w-full pl-10 pr-4 py-2 rounded-full border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                />
                </div>
                <div className="flex items-center space-x-4">
                    <Select>
                        <SelectTrigger className="min-w-32">
                            <SelectValue placeholder="Category" />
                        </SelectTrigger>
                        <SelectContent align="end">
                            {categories.map((category) => (
                                <SelectItem key={category} value={category}>
                                    {categoryLabels[category]}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
            </div>
            </header>
            <main className="max-w-5xl mx-auto px-4 py-4 gap-4 grid grid-cols-3 w-full">
                {templates.map((template, index) => (
                    <TemplateCard key={index} template={template} />
                ))}
            </main>
        </div>
    );
}