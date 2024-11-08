const FounderCard = ({ name, image }) => (
  <div className="text-center">
    <img src={image} alt={name} className="rounded-full h-32 w-32 mx-auto" />
    <h3 className="mt-4 font-bold text-gray-800">{name}</h3>
  </div>
);

const Founders = () => {
  return (
    <section className="p-8 md:p-16 bg-gray-50 text-center">
      <h2 className="text-2xl font-bold text-gray-800">Meet the Founders</h2>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        <FounderCard name="Gregory Opondi" image="/avatar.jpeg" />
        <FounderCard name="Daisy Kirui" image="/avatar.jpeg" />
        <FounderCard name="James Achesa" image="/avatar.jpeg" />
      </div>
    </section>
  );
};

export default Founders;
