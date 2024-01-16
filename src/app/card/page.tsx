import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"


function page() {
    return (
        <main className="h-full flex justify-center items-center">
           
            <Card>
                <CardHeader>
                    <CardTitle>Login Card</CardTitle>
                    <CardDescription>User details</CardDescription>
                </CardHeader>
                <CardContent>
                    <h1>Name</h1>
                    <input className="text-slate-800" type="text" placeholder="Shivam" />
                </CardContent>
                <CardFooter>
                    <h1>Email</h1>
                    <input className="text-slate-800" type="email" placeholder="abc@gmai.com"/>
                </CardFooter>
            </Card>

        </main>
    )
}

export default page