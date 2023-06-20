import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export default function Testing() {
    return (
        <div className="container mx-auto px-4 py-4">
        <div className="grid grid-flow-row-dense grid-cols-1 grid-rows-1">
            <Card className="w-[450px]">
            <CardHeader>
                <CardTitle>Group Title</CardTitle>
                <CardDescription>Group Description</CardDescription>
                </CardHeader>
                <CardContent>
                    <p>Content</p>
                </CardContent>
                <CardFooter>
                    <Button> Join </Button>
                </CardFooter>
        </Card>
</div>
</div>
    )
}