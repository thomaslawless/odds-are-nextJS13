import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
type Game = {
  id: number,
  background_image: string,
  rating: number,
  name: string 
}

const getGames =async (): Promise<Game[]> => {
  const res = await fetch (`https://api.rawg.io/api/games?key=${process.env.RAWG}`)
  if(!res.ok){
    throw new Error("failed to fetch")
  }
  await new Promise((resolve) =>setTimeout(resolve, 2000))
  const data = await res.json()
  return data.results
}


export default async function Testing() {
  const games = await getGames()
  return (
   <main className="m-24 rounded-md grid grid-cols-4 gap-12">
    {games.map((game) => (
      <Card className="col-span-4" key={game.id}>
        <CardHeader>
            <CardTitle>{game.name}</CardTitle>
            <CardDescription>{game.rating}</CardDescription>
        </CardHeader>
        <CardContent className="aspect-video relative">
        <Image
          src={game.background_image}
          fill
          className="object-cover rounded-md"
          alt={game.name}
          />
          </CardContent>
          <CardFooter>
            <Button className=""> Join </Button>
            <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <br></br>
            <br></br>
            <h1> @tom</h1>
        </CardFooter>
          </Card>
        
    ))}
   </main>
  )
}
