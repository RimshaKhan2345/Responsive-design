import React from 'react'
import Image from 'next/image'
import { url } from 'inspector'
const Featuredproduct = () => {
  return (
    <div className='flex lg:flex-row md:flex-raw flex-col justify-around items-center'>
    <div className="md:w-6/12 max-w-sm mb-20">
<Image 
src="/pink bag.jpg" 
alt='bag image' 
height={200} 
width={300}
/>
    <p className=' text-orange-600 text-center pt-10'>pkr=5000</p>
    <div className='flex justify-center items-center my-3'>
    <button className='bg-orange-600 hover:bg-blue-700 text-center text-white  py-4 px-10 rounded-md'> Buy Now</button>
</div>
</div>

<div className="md:w-6/12 max-w-sm mb-20">
<Image 
src="/shopping img.jpeg" 
alt='bag image' 
height={400} 
width={250}
/>
<p className=' text-orange-600 text-center pt-12'>pkr=10000</p>
<div className='flex justify-center items-center my-3'>
    <button className='bg-orange-600 hover:bg-blue-700 text-center text-white py-4 px-10 mt-4 rounded-md'> Buy Now</button>
</div>
</div>

<div className=" md:w-6/12 max-w-sm mb-20">
<Image 
src="/teddy bag.jpeg" 
alt='bag image' 
height={300} 
width={300}
/>
<p className=' text-orange-600 text-center pt-10'>pkr=3000</p>
<div className='flex justify-center items-center my-3'>
    <button className='bg-orange-600 hover:bg-blue-700 text-center text-white py-4 px-10 rounded-md'> Buy Now</button>
  </div>
</div>
</div>
  )
}

export default Featuredproduct
