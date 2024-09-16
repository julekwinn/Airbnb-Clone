import Image from "next/image";
const MyReservationPage = () => {
  return (
    <main className="max-w-[1500px] mx-auto px-6 pb-6">
      <h1 className="mt-6 mb-2 text-2xl">My reservations</h1>

      <div className="space-y-4">
        <div className="p-5 mt-4 grid grid-cols-1  md:grid-cols-4 gap-4 shadow-md border border-gray-300 rounded-xl">
          <div className="col-span-1">
            <div className="relative overflow-hidden aspect-square rounded-xl">
              <Image
                src="/Beach_house.jpg"
                fill
                className="hover:scale-110 object-cover transition h-full w-full"
                alt="Beach house"
              ></Image>
            </div>
          </div>

          <div className="col-span-1 md:col-span-3">
            <h2 className="mb-4 text-xl">Property Name</h2>
            <p className="mb-2">
              <strong>Check in date: </strong> 14/2/2024
            </p>
            <p className="mb-2">
              <strong>Check out date: </strong> 16/2/2024
            </p>
            <p className="mb-2">
              <strong>Number of nights: </strong> 2
            </p>
            <p className="mb-2">
              <strong>Total price: </strong> $600
            </p>
            <div className="mt-6 inline-block cursor-pointer py-4 px-6 bg-airbnb hover:bg-airbnb-dark rounded-xl">
              Go to property
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="p-5 mt-4 grid grid-cols-1  md:grid-cols-4 gap-4 shadow-md border border-gray-300 rounded-xl">
          <div className="col-span-1">
            <div className="relative overflow-hidden aspect-square rounded-xl">
              <Image
                src="/garden_house.jpg"
                fill
                className="hover:scale-110 object-cover transition h-full w-full"
                alt="Garden house"
              ></Image>
            </div>
          </div>

          <div className="col-span-1 md:col-span-3">
            <h2 className="mb-4 text-xl">Property Name</h2>
            <p className="mb-2">
              <strong>Check in date: </strong> 14/2/2024
            </p>
            <p className="mb-2">
              <strong>Check out date: </strong> 16/2/2024
            </p>
            <p className="mb-2">
              <strong>Number of nights: </strong> 2
            </p>
            <p className="mb-2">
              <strong>Total price: </strong> $600
            </p>
            <div className=" mt-6 inline-block cursor-pointer py-4 px-6 bg-airbnb hover:bg-airbnb-dark rounded-xl">
              Go to property
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MyReservationPage;
