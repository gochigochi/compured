import React from 'react'

const DashboardPage = ({ response }) => {

    console.log("RESPONSE....", response)

    return (
        <div>DashboardPage</div>
    )
}

export default DashboardPage

export async function getServerSideProps() {

    const response = await fetch(`https://api-alfa.saasargentina.com/v0.2/login?iue=PuaNYqpDhRBJ7K80I8WC&S=&email=info@compured.com.ar&pass=Karaoke3`, {
        method: 'GET',
    })

    const json = await response.json()


    console.log("REESPONES>.....", json)

    return { props: { response: json } }
}