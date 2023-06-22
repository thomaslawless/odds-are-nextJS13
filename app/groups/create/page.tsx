import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export default async function Index() {
    return (
        <div>
            <h1>Create a Group</h1>
        </div>
    )
}