import React from 'react'
import { MDBFooter } from 'mdb-react-ui-kit'

function Footer() {
  return (
    <>
      <MDBFooter bgColor="light" className="text-center text-lg-left">
      <div className="text-center p-3">
        &copy; 2024 My Portfolio   <a className='fs-3 p-2' href="https://github.com/RohithSekharN"><i class="fa-brands fa-github"></i></a>   <a className='fs-3 p-2' href="https://www.linkedin.com/in/rohith-sekhar-n/"><i class="fa-brands fa-linkedin"></i></a>
      </div>
    </MDBFooter>
    </>
  )
}

export default Footer
