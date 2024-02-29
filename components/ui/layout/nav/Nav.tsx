// import dynamic from 'next/dynamic'
// import { useState } from "react"
// // import Conditions from './conditions/Conditions'
// // import { conditions } from './conditions/data'

// const DesktopNav = dynamic(() => import('./desktop_nav/DesktopNav'))
// const MobileNav = dynamic(() => import('./mobile_nav/MobileNav'))

// const Nav = () => {

//     const [open, setOpen] = useState(false)

//     return (
//         <header className="relative z-[800] floating-box-shadow">
//             <div className="max-w-screen-2xl mx-auto px-3">
//                 {/* <DesktopNav />
//                 <MobileNav /> */}
//             </div>
//             {/* { open ? <Conditions action={() => setOpen(!open)}>{conditions}</Conditions> : null } */}
//         </header>
//     )
// }

// export default Nav

import React from 'react'

const Nav = () => {
    return (
        <header className="relative z-[800] floating-box-shadow">
            <div className="max-w-screen-2xl mx-auto px-3">
            </div>
        </header>
    )
}

export default Nav