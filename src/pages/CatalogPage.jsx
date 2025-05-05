import book from "../assets/book.jpg";

const CatalogPage = () => {
  return (
    <div className="container px-4 py-16 mx-auto flex-1">
      <h1 className="mb-10 text-3xl font-bold">Book Catalog</h1>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {/* Placeholder Book Cards */}
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="overflow-hidden transition-shadow duration-300 bg-white rounded-lg shadow-md hover:shadow-lg"
          >
            <div className="w-full h-48">
              <img src={book} alt="book image" className="w-full h-full" />
            </div>
            <div className="p-4">
              <h3 className="mb-2 text-lg font-semibold">Book Title {i + 1}</h3>
              <p className="mb-2 text-sm text-gray-600">Author Name</p>
              <div className="flex justify-between items-center mt-4">
                <span className="font-semibold text-primary">$4.99/week</span>
                <button className="bg-primary rounded-md py-1 px-2 text-secondary cursor-pointer">
                  Add to Basket
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CatalogPage;
