
import React from 'react'

function Pegenation({totalPosts , postPerPage , setCurrentPage}) {
    let pages = [];

    for (let i = 1 ; i <= Math.ceil(totalPosts / postPerPage);i++){
        pages.push(i)
    }

  return (
    <div> 
        {
        pages.map((page,index)=>{
            return <button className='pageButton' key={index} onClick={() => setCurrentPage(page)}>{page}</button>
        })
        
        }
    </div>
  )
}

export default Pegenation