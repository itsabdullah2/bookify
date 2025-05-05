import { Link } from "react-router-dom";
import book from "../assets/book.jpg";

const HomePage = () => {
  return (
    <div className="flex-1">
      {/* Hero Section */}
      <section className="relative flex items-center justify-center py-20 md:py-32 bg-slate-100">
        <div className="container px-4 mx-auto text-center">
          <h1 className="mb-6 text-4xl font-bold text-primary md:text-5xl lg:text-6xl">
            Welcome to Bookify
          </h1>
          <p className="mb-8 text-xl text-gray-600 md:text-2xl">
            Rent and Read Your Favorite Books!
          </p>
          <button className="px-10 py-4 text-lg bg-primary text-secondary rounded-xl cursor-pointer">
            <Link to="/catalog">Browse Catalog</Link>
          </button>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-16">
        <div className="container px-4 mx-auto">
          <h2 className="mb-10 text-3xl font-bold text-center">
            Featured Books
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Placeholder Book Cards */}
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="overflow-hidden transition-shadow duration-300 bg-white rounded-lg shadow-md hover:shadow-lg"
              >
                <div className="w-full h-64">
                  <img src={book} alt="book image" className="w-full h-full" />
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-semibold">Book Title {i}</h3>
                  <p className="mb-4 text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                  <button className="py-1 px-2 bg-primary text-secondary cursor-pointer rounded-md">
                    <Link to={`/book/${i}`}>View Details</Link>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 mx-auto">
          <h2 className="mb-10 text-3xl font-bold text-center">
            How Bookify Works
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="p-6 text-center">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 text-white bg-primary rounded-full">
                1
              </div>
              <h3 className="mb-2 text-xl font-semibold">Browse</h3>
              <p className="text-gray-600">
                Explore our extensive collection of books.
              </p>
            </div>
            <div className="p-6 text-center">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 text-white bg-primary rounded-full">
                2
              </div>
              <h3 className="mb-2 text-xl font-semibold">Rent</h3>
              <p className="text-gray-600">
                Select your favorite books and rent them.
              </p>
            </div>
            <div className="p-6 text-center">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 text-white bg-primary rounded-full">
                3
              </div>
              <h3 className="mb-2 text-xl font-semibold">Read</h3>
              <p className="text-gray-600">
                Enjoy your books and return when you're done.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
