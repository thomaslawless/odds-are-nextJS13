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
    bet: "This is Bet Number One",
    status: "Pending",
    betAmount: "$250.00",
    odds: "+200",
    User: "@Tom",
  },
  {
    bet: "This is Bet Number One",
    status: "Pending",
    betAmount: "$250.00",
    odds: "+200",
    User: "@Tom",
  },
  {
    bet: "This is Bet Number One",
    status: "Pending",
    betAmount: "$250.00",
    odds: "+200",
    User: "@Tom",
  },
  {
    bet: "This is Bet Number One",
    status: "Pending",
    betAmount: "$250.00",
    odds: "+200",
    User: "@Tom",
  },
  {
    bet: "This is Bet Number One",
    status: "Pending",
    betAmount: "$250.00",
    odds: "+200",
    User: "@Tom",
  },
  {
    bet: "INV001",
    status: "Paid",
    betAmount: "$250.00",
    odds: "+200",
    User: "@Tom",
  },
  {
    bet: "INV001",
    status: "Paid",
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
          <TableHead className="w-[100px]">Bet</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Amount</TableHead>
          <TableHead>Odds</TableHead>
          <TableHead className="text-right">User</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {bets.map((bets) => (
          <TableRow key={bets.bet}>
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