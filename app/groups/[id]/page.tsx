import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const bets = [
  {
    id: 1,
    bet: "This is Bet Number One",
    status: "Pending",
    betAmount: "$250.00",
    odds: "+200",
    user: "@Tom",
  },
  {
    id: 2,
    bet: "This is Bet Number One",
    status: "Pending",
    betAmount: "$250.00",
    odds: "+200",
    user: "@Tom",
  },
  {
    id: 3,
    bet: "This is Bet Number One",
    status: "Pending",
    betAmount: "$250.00",
    odds: "+200",
    user: "@Tom",
  },
  {
    id: 4,
    bet: "This is Bet Number One",
    status: "Pending",
    betAmount: "$250.00",
    odds: "+200",
    user: "@Tom",
  },
  {
    id: 5,
    bet: "This is Bet Number One",
    status: "Pending",
    betAmount: "$250.00",
    odds: "+200",
    user: "@Tom",
  },
  {
    id: 6,
    bet: "This is Bet Number One",
    status: "Pending",
    betAmount: "$250.00",
    odds: "+200",
    user: "@Tom",
  },
  {
    id: 7,
    bet: "This is Bet Number One",
    status: "Pending",
    betAmount: "$250.00",
    odds: "+200",
    user: "@Tom",
  },
]

export default function Page() {
  return (
    <Table>
      <TableCaption>Bets for Group Name</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Bet</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Amount</TableHead>
          <TableHead>Odds</TableHead>
          <TableHead>User</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {bets.map((bets) => (
          <TableRow key={bets.id}>
            <TableCell>{bets.bet}</TableCell>
            <TableCell>{bets.status}</TableCell>
            <TableCell>{bets.betAmount}</TableCell>
            <TableCell>{bets.odds}</TableCell>
            <TableCell>{bets.user}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}