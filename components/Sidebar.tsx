import React, { useState } from 'react'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import Link from 'next/link'
import GoogleLogin from 'react-google-login'
import { AiFillHome, AiOutlineMenu } from 'react-icons/ai'
import {ImCancelCircle} from 'react-icons/im'



const Sidebar = () => {
const [showSidebar,setShowSidebar] = useState(true)

const userProfile = false;


  const normalLink = 'flex itmes-center gap-3 hover:bg-primary p-3 justify-center xl:justify-start cursor-pointer font-semibold text-[#F51997] rounded'

  return (
    <div>
      <div className='block xl:hidden m-2 ml-4 mt-3 text-xl' onClick={() => setShowSidebar((prev) => !prev)}>
        {showSidebar ? <ImCancelCircle/> : <AiOutlineMenu/>}
      </div>
      {showSidebar && (
        <div className='xl:w-400 w-200 flex flex-col justify-start mb-10 border-r-2 border-gray-100 xl:border-0 p-3'>
          <div className='xl:border-b-2 border-gray-200 xl:pb-4'>
            <Link href='/'>
              <div className={normalLink}>
                <p className='text-2xl'>
                  <AiFillHome/>
                </p>
                <span className='text-xl hidden xl:block'>
                  For You
                </span>
              </div>
            </Link>
            
          </div>
          {!userProfile && (
              <div className='px-2 py-4 hidden xl:block'>
                <p className='text-gray-400'>Login to like and comment</p>
                <div className='pr-4'>

                </div>
              </div>
            )}
        </div>
      )}
    </div>
  )
}

export default Sidebar