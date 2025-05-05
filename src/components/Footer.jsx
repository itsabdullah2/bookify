const Footer = () => {
  return (
    <footer className="py-6 text-center text-gray-600 bg-gray-100">
      <div className="container mx-auto">
        <p>&copy; {new Date().getFullYear()} Bookify. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
