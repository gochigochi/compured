import Dashboard from "@/components/admin/dashboard/Dashboard"

const DashboardPage = () => <Dashboard />

export default DashboardPage

export async function getServerSideProps(context) {

    const isAuth = context.req.cookies.accessToken === process.env.ADMIN_UNIQUE_IDENTIFIER
    
    if (!isAuth) {
        return {
            redirect: {
                destination: "/",
                permanent: false,
              },
              props: {},
        }
    }
    return { 
        props: {}
    }
}