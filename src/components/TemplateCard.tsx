import { categoryLabels, Template } from "@/types/template";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { renderRichText } from "@/lib/utils";

export default function TemplateCard({ template }: { template: Template }) {
    const isFree = template.price === 0;

    return (
        <Card className="overflow-hidden">
            <img className="-mt-6" src={template.image} alt="" width={1600} height={900} />
            <CardHeader className="flex flex-row justify-between items-center flex-wrap">
                <CardTitle>{template.name}</CardTitle>
                <div className="flex flex-row gap-2">
                    <Badge variant="outline">
                        {categoryLabels[template.category]}
                    </Badge>
                    {
                        !isFree &&
                        <Badge variant="secondary">
                            {(template.price / 100).toFixed(2)}€
                        </Badge>
                    }
                </div>
            </CardHeader>
            <CardContent>
                <CardDescription>
                    {renderRichText(template.description)}
                </CardDescription>
            </CardContent>
            <CardFooter className="flex flex-row gap-2">
                {template.owned ? (
                    <Button className="flex-1">
                        Use
                    </Button>
                ): (
                    <>
                        <Button variant="outline" className="flex-1">
                            Preview
                        </Button>
                        <Button className="flex-1">
                            {isFree ? "Get" : "Buy"}
                        </Button>
                    </>
                )}
            </CardFooter>
        </Card>
    );
}