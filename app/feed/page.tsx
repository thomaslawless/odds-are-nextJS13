import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export default function Feed() {
    return (
<div className="container mx-auto">
    <div className="grid-flow-col">
    <div className="m-24 rounded-md grid grid-cols-4 gap-12">
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
</div>
  )
}