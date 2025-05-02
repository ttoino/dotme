import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search } from "lucide-react";

export default function Market() {
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
                            <SelectItem value="design">Design</SelectItem>
                            <SelectItem value="development">Development</SelectItem>
                            <SelectItem value="marketing">Marketing</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>
            </header>
            <main className="max-w-5xl mx-auto px-4 py-4 gap-4 grid grid-cols-3 w-full">
                {new Array(30).fill(null).map((_, i) => (
                    <Card className="overflow-hidden" key={i}>
                        <img className="-mt-6" src={`https://picsum.photos/1600/900?i=${i}`} alt="" width={1600} height={900} />
                        <CardHeader className="flex flex-row justify-between items-center">
                            <CardTitle>Template {i+1}</CardTitle>
                            <div className="flex flex-row gap-2">
                                <Badge variant="outline">
                                    Design
                                </Badge>
                                <Badge variant="secondary">
                                    $19.99
                                </Badge>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <CardDescription>
                                This is a description of the template. It provides a brief overview of what the template is about and its features.
                            </CardDescription>
                        </CardContent>
                        <CardFooter className="flex flex-row gap-2">
                            <Button variant="outline" className="flex-1">
                                Preview
                            </Button>
                            <Button className="flex-1">
                                Buy
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
            </main>
        </div>
    );
}