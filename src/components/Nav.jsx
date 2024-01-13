import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
  <nav>
        <div className='logoblock'>
            <img src="https://tse2.mm.bing.net/th?id=OIP.QBDkPpR9yOvtP0SrdULfYAHaHa&pid=Api&P=0&h=180" alt="" />
            <h1 className='tracking-in-expand'>CONTACT MANAGER</h1>
        </div>
        <div className='menublock'>
            <ol>
                <li>
                    <Link to={"/addcontact"}>HOME</Link>
                </li>
                <li><Link to={"/"}>CONTACTS</Link></li>
            </ol>
        </div>
  </nav>
  )
}

export default Nav
