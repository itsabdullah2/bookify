import { Link } from "react-router-dom";

const BasketPage = () => {
  // Placeholder basket items
  const basketItems = [
    { id: 1, title: "The Great Gatsby", price: 4.99, weeks: 2 },
    { id: 2, title: "To Kill a Mockingbird", price: 3.99, weeks: 1 },
  ];

  return (
    <div className="container px-4 py-16 mx-auto flex-1">
      <h1 className="mb-10 text-3xl font-bold">Your Basket</h1>

      {basketItems.length > 0 ? (
        <>
          <div className="flex-1 mb-8 overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Book
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Price/Week
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Weeks
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Total
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {basketItems.map((item) => (
                  <tr key={item.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">
                        {item.title}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">
                        ${item.price.toFixed(2)}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">{item.weeks}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">
                        ${(item.price * item.weeks).toFixed(2)}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <button className="text-red-600 hover:text-red-900 cursor-pointer">
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex flex-col items-end">
            <div className="p-4 mb-4 bg-gray-50 rounded-lg">
              <div className="flex justify-between mb-2">
                <span>Subtotal:</span>
                <span>
                  $
                  {basketItems
                    .reduce((total, item) => total + item.price * item.weeks, 0)
                    .toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between font-semibold">
                <span>Total:</span>
                <span>
                  $
                  {basketItems
                    .reduce((total, item) => total + item.price * item.weeks, 0)
                    .toFixed(2)}
                </span>
              </div>
            </div>
            <button className="py-1 px-2 bg-primary text-secondary cursor-pointer rounded-lg">
              Checkout
            </button>
          </div>
        </>
      ) : (
        <div className="flex-1 text-center">
          <p className="mb-6 text-gray-600">Your basket is empty.</p>
          <button className="py-1 px-2 bg-primary text-secondary cursor-pointer rounded-lg">
            <Link to="/catalog">Browse Books</Link>
          </button>
        </div>
      )}
    </div>
  );
};

export default BasketPage;
