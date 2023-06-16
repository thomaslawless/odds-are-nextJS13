import { Skeleton } from "@/components/ui/skeleton"
export default function Loading(){
    return (
        <main className="m-24 rounded-md grid grid-cols-4 gap-12">
         {Array.from({length: 12}, (_, i) => i+1).map((id) => (
           <div key={id} className="col-span-4 md: col-span-2">
             <Skeleton className = " -6 w-1/2 bg-grap-200"> </Skeleton>
             <p></p>
             <div className="aspect-video relative">
               </div>
               </div>
         ))}
        </main>
       )
     }