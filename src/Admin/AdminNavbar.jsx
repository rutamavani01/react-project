import React from 'react'
import {Link} from 'react-router-dom'

export default function AdminNavbar() {
  return (
    <>
        <Link to='./Admin/AdminProduct'>product</Link>
        <Link to='./Admin/AdminCatagory'>catagory</Link>
    </>

  )
}
