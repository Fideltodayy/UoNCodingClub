const Partners = () => {
  return (
    <section className="p-8 md:p-16 bg-white text-center">
      <h2 className="text-2xl font-bold text-gray-800">
        Our Community Partners
      </h2>
      <div className="flex justify-center space-x-4 mt-8">
        {/* Partner logos */}
        <img src="/path/to/logo1.png" alt="Partner 1" className="h-12" />
        <img src="/path/to/logo2.png" alt="Partner 2" className="h-12" />
      </div>
    </section>
  );
};

export default Partners;
