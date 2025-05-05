import { useState } from "react";

const AdminPage = () => {
  const books = [
    {
      id: 1,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      stock: 8,
      rentals: 12,
    },
    {
      id: 2,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      stock: 5,
      rentals: 9,
    },
    { id: 3, title: "1984", author: "George Orwell", stock: 3, rentals: 15 },
  ];

  const users = [
    { id: 1, name: "John Doe", email: "john@example.com", booksRented: 2 },
    { id: 2, name: "Jane Smith", email: "jane@example.com", booksRented: 1 },
    { id: 3, name: "Bob Johnson", email: "bob@example.com", booksRented: 3 },
  ];

  const [activeTab, setActiveTab] = useState("books");

  const totalRentals = users.reduce(
    (total, user) => total + user.booksRented,
    0
  );

  return (
    <div className="container mx-auto px-4 py-16 flex-1">
      <h1 className="text-3xl font-bold mb-10">Admin Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="border rounded-lg p-4 shadow">
          <h2 className="text-sm text-gray-500">Total Books</h2>
          <p className="text-2xl font-bold">{books.length}</p>
        </div>
        <div className="border rounded-lg p-4 shadow">
          <h2 className="text-sm text-gray-500">Total Users</h2>
          <p className="text-2xl font-bold">{users.length}</p>
        </div>
        <div className="border rounded-lg p-4 shadow">
          <h2 className="text-sm text-gray-500">Active Rentals</h2>
          <p className="text-2xl font-bold">{totalRentals}</p>
        </div>
      </div>

      <div className="flex space-x-4 mb-6">
        <button
          className={`px-4 py-2 rounded cursor-pointer ${
            activeTab === "books" ? "bg-blue-600 text-white" : "bg-gray-200"
          }`}
          onClick={() => setActiveTab("books")}
        >
          Manage Books
        </button>
        <button
          className={`px-4 py-2 rounded cursor-pointer ${
            activeTab === "users" ? "bg-blue-600 text-white" : "bg-gray-200"
          }`}
          onClick={() => setActiveTab("users")}
        >
          Manage Users
        </button>
      </div>

      {activeTab === "books" && (
        <div>
          <div className="flex justify-end mb-4">
            <button className="bg-green-600 text-white px-4 py-2 rounded cursor-pointer">
              Add New Book
            </button>
          </div>
          <table className="w-full border-collapse border">
            <thead>
              <tr className="bg-gray-100">
                <th className="border px-4 py-2">ID</th>
                <th className="border px-4 py-2">Title</th>
                <th className="border px-4 py-2">Author</th>
                <th className="border px-4 py-2">In Stock</th>
                <th className="border px-4 py-2">Total Rentals</th>
                <th className="border px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {books.map((book) => (
                <tr key={book.id}>
                  <td className="border px-4 py-2">{book.id}</td>
                  <td className="border px-4 py-2">{book.title}</td>
                  <td className="border px-4 py-2">{book.author}</td>
                  <td className="border px-4 py-2">{book.stock}</td>
                  <td className="border px-4 py-2">{book.rentals}</td>
                  <td className="border px-4 py-2">
                    <div className="flex space-x-2">
                      <button className="px-2 py-1 border rounded text-sm cursor-pointer">
                        Edit
                      </button>
                      <button className="px-2 py-1 border rounded text-sm bg-red-500 text-white cursor-pointer">
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {activeTab === "users" && (
        <div>
          <table className="w-full border-collapse border mt-6">
            <thead>
              <tr className="bg-gray-100">
                <th className="border px-4 py-2">ID</th>
                <th className="border px-4 py-2">Name</th>
                <th className="border px-4 py-2">Email</th>
                <th className="border px-4 py-2">Books Rented</th>
                <th className="border px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td className="border px-4 py-2">{user.id}</td>
                  <td className="border px-4 py-2">{user.name}</td>
                  <td className="border px-4 py-2">{user.email}</td>
                  <td className="border px-4 py-2">{user.booksRented}</td>
                  <td className="border px-4 py-2">
                    <div className="flex space-x-2">
                      <button className="px-2 py-1 border rounded text-sm cursor-pointer">
                        View Details
                      </button>
                      <button className="px-2 py-1 border rounded text-sm bg-red-500 text-white cursor-pointer">
                        Suspend
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AdminPage;
