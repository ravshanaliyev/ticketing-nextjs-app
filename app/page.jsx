import TicketCard from "./(components)/ticket-card"

const Dashboard = () => {
  return (
    <div className="p-5">
      <div className="lg:grid grid-cols-2 xl:grid-cols-4 gap-5">
        <TicketCard />
        <TicketCard />
        <TicketCard />
        <TicketCard />
        <TicketCard />
        <TicketCard />
      </div>
    </div>
  )
}

export default Dashboard