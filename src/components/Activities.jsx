const ActivityCard = ({ title, date }) => (
  <div className="bg-white shadow-md p-4 rounded-lg">
    <h3 className="font-bold text-gray-800">{title}</h3>
    <p className="text-gray-500">{date}</p>
  </div>
);

const Activities = () => {
  return (
    <section className="p-8 md:p-16 bg-white">
      <h2 className="text-center text-2xl font-bold text-gray-800">
        Activities
      </h2>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        <ActivityCard title="Workshop on AI" date="Nov 15" />
        <ActivityCard title="Hackathon" date="Dec 5" />
        <ActivityCard title="Networking Event" date="Dec 10" />
      </div>
    </section>
  );
};

export default Activities;
