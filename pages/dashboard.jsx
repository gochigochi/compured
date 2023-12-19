import Dashboard from "@/components/admin/dashboard/Dashboard"

const DashboardPage = ({ data }) => {

    console.log(data)

    return <Dashboard />
}

export default DashboardPage

export async function getServerSideProps(context) {

    const isAuth = context.req.cookies.accessToken === process.env.ADMIN_UNIQUE_IDENTIFIER
    
    if (!isAuth) {
        return {
            props: {
                data: null,
            }
        }
    }

    // MYSQL CALL

    return { 
        props: {
            data: [],
        }
    }
}