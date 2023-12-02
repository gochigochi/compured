
const DashboardPage = ({ data }) => {

    console.log(data)

    return (
        <div>DashboardPage</div>
    )
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