import { React, useState } from 'react'

function PredictiveSalesPage() {
  const categories = ['electronics', 'beverages', 'clothing', 'travel', 'beauty'];
  const products = [
    {
      category: 'electronics',
      items: ['mobile', 'laptop', 'headphones', 'camera', 'television', 'printer', 'speaker', 'smartwatch', 'tablet', 'heater']
    },
    {
      category: 'beverages',
      items: ['coffee power', 'softdrink', 'juice', 'energydrink', 'milk']
    },
    {
      category: 'clothing',
      items: ['saree', 'kurta', 'lehenga', 'jeans', 'shirt', 'tshirt', 'trouser', 'jacket', 'blazer', 'suit']
    },
    {
      category: 'travel',
      items: ['powerbank', 'backpack', 'luggage', 'trolley', 'bag', 'wallet', 'sunglasses', 'watch', 'shoes', 'umbrella']
    },
    {
      category: 'beauty',
      items: ['lipstick', 'eyeliner', 'mascara', 'foundation', 'compact', 'kajal', 'nailpolish', 'perfume', 'shampoo', 'conditioner']
    }
  ];
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const seasons = ['Summer', 'Winter', 'Rainy'];
  const [isFestival, setIsFestival] = useState(false);
  const [isWeekend, setIsWeekend] = useState(false);

  return (
    <>
      <div class="w-full p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
        <form class="space-y-6" action="#">
          <div className="flex justify-between items-center">
            <h5 class="text-xl font-medium text-gray-900 dark:text-white">Predict Your Sales</h5>
            <button type="button" class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5  dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Upload csv</button>
          </div>
          {/* Input category and product from dropdown */}
          <div className="flex space-x-4">
            <div className='grow' style={{ flex: 1 }}>
              <label for="category" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category</label>
              <select id="category" name="category" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required>
                <option value="">Select category</option>
                {categories.map((category, index) => (
                  <option key={index} value={category}>{category}</option>
                ))}
              </select>
            </div>

            <div className='grow' style={{ flex: 1 }}>
              <label for="product" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product</label>
              <select id="product" name="product" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required>
                <option value="">Select product</option>
                {products.map((product, index) => (
                  <option key={index} value={product.category}>{product.category}</option>
                ))}
              </select>
            </div>
          </div>
          {/* Input Day as dropwown month as dropdown and year as text */}

          <div className="flex space-x-4">
            <div className='grow' style={{ flex: 1 }}>
              <label for="day" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Day</label>
              <select id="day" name="day" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required>
                <option value="">Select day</option>
                {days.map((day, index) => (
                  <option key={index} value={day}>{day}</option>
                ))}
              </select>
            </div>

            <div className='grow' style={{ flex: 1 }}>
              <label for="month" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Month</label>
              <select id="month" name="month" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required>
                <option value="">Select month</option>
                {months.map((month, index) => (
                  <option key={index} value={month}>{month}</option>
                ))}
              </select>
            </div>
            <div className='grow' style={{ flex: 1 }}>
              <label for="year" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Year</label>
              <input type="number" name="year" id="year" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="2021" required />
            </div>
          </div>
          <div className="flex space-x-4">
            <div className='grow' style={{ flex: 1 }}>
              <label for="season" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Season</label>
              <select id="season" name="season" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required>
                <option value="">Select season</option>
                {seasons.map((season, index) => (
                  <option key={index} value={season}>{season}</option>
                ))}
              </select>
            </div>
            <div className='grow' style={{ flex: 1 }}>
              <label for="festival" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Festival</label>
              <select id="festival" name="festival" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required>
                <option value="">Select festival</option>
                <option value="true">Yes</option>
                <option value="false">No</option>
              </select>
            </div>

            <div className='grow' style={{ flex: 1 }}>
              <label for="weekend" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Weekend</label>
              <select id="weekend" name="weekend" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required>
                <option value="">Select weekend</option>
                <option value="true">Yes</option>
                <option value="false">No</option>
              </select>
            </div>
          </div>

          <button type="submit" class="text-white  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-8 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Predict</button>
        </form>
      </div>

      <h3 class="text-xl font-medium text-gray-900 dark:text-white mt-8">Predicted Sales</h3>
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg mt-3">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">
                Product name
              </th>
              <th scope="col" class="px-6 py-3">
                Category
              </th>
              <th scope="col" class="px-6 py-3">
                Day
              </th>
              <th scope="col" class="px-6 py-3">
                Month
              </th>
              <th scope="col" class="px-6 py-3">
                Year
              </th>
              <th scope="col" class="px-6 py-3">
                Predicted Sales
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
              <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Mobile
              </th>
              <td class="px-6 py-4 whitespace-nowrap">
                Electronics
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                Monday
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                January
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                2021
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                245
              </td>
            </tr>

          </tbody>
        </table>
      </div>

    </>
  )
}

export default PredictiveSalesPage
