'use client'
import { TCategory } from '@/types/category.types'
import React from 'react'
import CategoryCard from './card'
import { useQuery } from '@tanstack/react-query'
import { getAllCategory } from '@/api/category.api'



const CategoryList = () => {

    const { data, isLoading } = useQuery({
        queryFn: getAllCategory,
        queryKey: ['get-all-category']
    })



    
    return (
        <div className='min-h-50 mt-5'>
            {isLoading ? <div className='w-full flex justify-center items-center h-50'>
                <p>Loading...</p>
            </div> : <div className='grid grid-cols-6 gap-10'>
                {   
                    data?.data?.map((category: TCategory) => <CategoryCard key={category._id} category={category} />)
                }
            </div>}
        </div>
    )
}

export default CategoryList
