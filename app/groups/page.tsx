import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import Link from "next/link";
export default async function Index() {
  const supabase = createServerComponentClient({ cookies });

  const { data: groups } = await supabase.from("groups").select();

  return (
    <div>
      <Link href="/groups/create">
        <Button>New Group</Button>
      </Link>

    <main className="m-24 rounded-md grid grid-cols-1 gap-12">
      {groups?.map((groups) => (
        <Card className="col-span-1" key={groups.id}>
        <CardTitle className="font-extrabold text-2xl"> {groups.name} </CardTitle>
        <br></br>
        <CardDescription>{groups.desc}</CardDescription>
        <br></br>
        <CardContent className=""> 
          Created at: {groups.created_at} <br></br>
          Start Date: {groups.start_date} <br></br>
          End Date: {groups.end_date} <br></br> <br></br>
          Members: John, Steve, Paul and 10 others.
        </CardContent>
        <CardFooter>
        <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
            </Avatar>
            <h1>Created by @tom</h1>
            <Link href="groups/1">
              <Button className="px-5">Join</Button>
            </Link>
            
        </CardFooter>
        </Card>
      ))}
      </main>
      </div>
  );
}