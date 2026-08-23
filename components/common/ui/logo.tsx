import Image from 'next/image'
import React from 'react'

const Logo = () => {
  return (
    <div className='max-h-14 max-w-14 overflow-clip rounded'>
            <Image
                src={'/logo.svg'}
                alt='logo'
                height={500}
                width={500}
                loading='eager'
                className='h-16 object-cover object-bottom zoom-120   w-20 rounded'
            />
        </div>
   
  )
}

export default Logo