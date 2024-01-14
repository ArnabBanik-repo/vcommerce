import React, { useState } from 'react'
import env from '../config';
import { useProd } from '../context/ProductContext';
import axios from 'axios';

const Filter = () => {

  const { setProducts } = useProd();

  const [category, setCategory] = useState('');
  const [condition, setCondition] = useState('');
  const [min_price, setMinPrice] = useState(10);
  const [max_price, setMaxPrice] = useState(10000);
  const [sort, setSort] = useState(0);

  const handleCancel = (e) => {
    e.preventDefault();
    setCategory('');
    setCondition('');
    setMinPrice(10);
    setMaxPrice(10000);
    setSort(1);
  }

  const handleSubmit = (e) => {
    // This does an independent search;
    // We want to search in the products context itself
    e.preventDefault();
    if(max_price < min_price) {
      alert('Max price has to be greater than min price');
      return;
    }
    let filter_string = `${env.BACKEND_URI_LOCAL}/api/v1/products?price[gte]=${min_price}&price[lte]=${max_price}`;
    if(category.length > 0)
      filter_string = filter_string.concat(`&category=${category.toLowerCase()}`)
    if(condition.length > 0)
      filter_string = filter_string.concat(`&condition=${condition.toLowerCase()}`)
    filter_string = sort === 1 ? filter_string.concat('&sort=price') : filter_string.concat('&sort=-price')
    axios.get(filter_string, { withCredentials: true })
      .then(res => setProducts(res.data.data.products))
      .catch(err => console.log(err));
  }

  return (
    <div className='m-5 p-5 shadow-md rounded-md'>
      <p className='text-2xl'>Filter</p>
      <form className='flex flex-col gap-3 mt-2 text-md'>
        <div className='flex flex-col gap-1'>
          <p>Category</p>
          <select className='text-sm rounded-md outline-none px-2 bg-gray-100 text-gray-800' value={category} onChange={(e) => setCategory(e.target.value)} >
            <option>All</option>
            <option>Book</option>
            <option>Cycle</option>
            <option>Household</option>
            <option>Misc</option>
            <option>Garments</option>
            <option>Accessory</option>
          </select>
        </div>
        <div className='flex flex-col gap-1'>
          <p>Condition</p>
          <select className='text-sm rounded-md outline-none px-2 bg-gray-100 text-gray-800' value={condition} onChange={(e) => setCondition(e.target.value)}>
            <option>Any</option>
            <option>New</option>
            <option>Almost new</option>
            <option>Fairly old</option>
            <option>Very old</option>
          </select>
        </div>
        <div className='flex flex-col gap-1'>
          <p>Price</p>
          <div className='flex gap-4'>
            <span className='text-sm text-gray-800'>Min <input type='number' className='w-20 rounded-md outline-none px-2 bg-gray-100' value={min_price} onChange={(e) => setMinPrice(e.target.value)} /></span>
            <span className='text-sm text-gray-800'>Max <input type='number' className='w-20 rounded-md outline-none px-2 bg-gray-100' value={max_price} onChange={(e) => setMaxPrice(e.target.value)} /></span>
          </div>
        </div>
        <div className='flex flex-col gap-1'>
          <p>Sort</p>
          <div className='flex justify-between w-1/2'>
            <div className='flex items-center gap-1'>
              <p className='text-sm text-gray-800'>Asc</p>
              <input type='radio' name='sort' value={0} className='outline-none px-1' />
            </div>
            <div className='flex items-center gap-1'>
              <p className='text-sm text-gray-800'>Desc</p>
              <input type='radio' name='sort' value={1} className='outline-none px-1' />
            </div>
          </div>
        </div>
        <div className='flex justify-center gap-4 text-sm'>
          <button className='bg-green-600 w-28 p-2 rounded-md text-white outline-none hover:bg-green-700 transition-all' onClick={handleSubmit}>Apply Filter</button>
          <button className='bg-red-600 w-28 p-2 rounded-md text-white outline-none hover:bg-red-700 transition-all' onClick={handleCancel}>Cancel</button>
        </div>
      </form>
    </div>
  )
}

export default Filter
