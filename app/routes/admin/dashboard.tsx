import {Header} from "../../../components";

const Dashboard = () => {
    const user = { name: 'Adrian' }

    return (
        <main className='dashboard wrapper'>
            <Header
                title={`Welcome ${user?.name ?? 'Guess'} 👋`}
                description="Tract activity, trends and popular destinations in real time"
            />

            Dashboard Page Contents
        </main>
    )
}
export default Dashboard
