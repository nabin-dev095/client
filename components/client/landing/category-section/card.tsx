import { TCategory } from '@/types/category.types'
import Image from 'next/image'
import React from 'react'

interface IProps {
    category: TCategory
}

const CategoryCard = ({ category: { name, image, description } }: IProps) => {
    return (
        <div className='min-w-50 border border-gray-300 rounded-md group '>
            {/* image */}
            <div className='w-full h-30 mb-1 rounded-t-md overflow-clip'>
                <Image
                    src={image.path}
                    alt={name + "-" + 'image'}
                    height={1000}
                    width={1000}
                    className='object-contain h-full w-full group-hover:scale-[1.1] transition-all duration-300 z-0'
                />
            </div>
            <div className='px-2 mb-4 flex flex-col gap-2'>
                {/* name */}
                <p className='text-lg font-semibold text-gray-700'>{name}</p>

                {/*description */}
                <p className='text-xs text-gray-500 line-clamp-3'>{description}</p>
            </div>
        </div>
    )
}

export default CategoryCard
