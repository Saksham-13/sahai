import resources from "../resources.json";
export async function getStaticPaths() {
  // Assuming resources is defined and contains the necessary data
  // console.log("Resources:", resources);

  const paths = resources.map((item) => {
    console.log("Item:", item[0]);
    return {
      params: {
        id: item[0].id.toString(),
      },
    };
  });

  return {
    paths: paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { id } }) {
  const city = resources.find((item) => item[0].id === parseInt(id));

  return {
    props: {
      city,
    },
  };
}
export default function City({ city }) {
  return (
    <main className="flex flex-col min-h-screen bg-gray-100 ">
      <header className="bg-white py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-900 ">
            {city[0].location} Mental Health Resources
          </h1>
          <p className="mt-2 text-lg text-gray-600">
            A comprehensive guide to mental health resources in the city.
          </p>
        </div>
      </header>
      <section className="bg-white  py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Helplines</h2>
          <div className="space-y-4">
            {city[0].helplines.map((helpline) => (
              <div className="border rounded-lg p-4 ">
                <h3 className="text-lg font-semibold">{helpline.name}</h3>
                <p className="text-gray-600 ">
                  Contact:{" "}
                  {helpline.number && helpline.email
                    ? `${helpline.number} / ${helpline.email}`
                    : helpline.number || helpline.email}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-white  py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900  mb-6">
            Support Groups
          </h2>
          <div className="space-y-4">
          {city[0].supportGroups.map((supportGroup, index) => (
  <div className="border rounded-lg p-4" key={index}>
    <h3 className="text-lg font-semibold">{supportGroup.name}</h3>
    {supportGroup.link ? (
      <a href={supportGroup.link} className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
        Visit Support Group
      </a>
    ) : (
      <p className="text-red-500">Link not available</p>
    )}
  </div>
))}

            
          </div>
        </div>
      </section>
      <section className="bg-white  py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Therapists</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {city[0].therapists.map((therapist, index) => (
  <div className="border rounded-lg p-4" key={index}>
    <h3 className="text-lg font-semibold">{therapist.name}</h3>
    {therapist.email && (
      <p className="text-gray-600">Contact: {therapist.email}</p>
    )}
    {therapist.specialization && (
      <p className="text-gray-600">
        Specialization: {therapist.specialization}
      </p>
    )}
    {therapist.bio && (
      <div>
        <p className="text-gray-600">Bio:</p>
        <ul className="list-disc list-inside text-gray-600">
          {therapist.bio.map((line, idx) => (
            <li key={idx}>{line}</li>
          ))}
        </ul>
      </div>
    )}
    {/* Add any additional fields you want to display */}
  </div>
))}

            
          </div>
        </div>
      </section>
      <footer className="bg-white  py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm text-gray-600 ">
            © 2024 Sahai. All rights reserved.
          </p>
          <p className="text-sm text-gray-600 ">
            This is a mental health resource page and is not intended to replace
            professional medical advice.
          </p>
        </div>
      </footer>
    </main>
  );
}
