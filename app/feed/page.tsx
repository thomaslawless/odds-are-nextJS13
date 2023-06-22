import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export default async function Index() {
  const supabase = createServerComponentClient({ cookies });

  const { data: groups } = await supabase.from("groups").select();

  return (
    <main className="m-24 rounded-md grid grid-cols-4 gap-12">
      {groups?.map((groups) => (
        <Card className="col-span-4" key={groups.id}>
        <CardTitle> {groups.name} </CardTitle>
        <CardDescription>{groups.desc}</CardDescription>
        <CardContent>{groups.created_at}</CardContent>
        </Card>
      ))}
      </main>
  );
}