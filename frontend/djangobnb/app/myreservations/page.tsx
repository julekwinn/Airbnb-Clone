import Image from "next/image";
import apiServices from "../services/apiService";

const MyReservationPage = async () => {
  const reservations = await apiServices.get("/api/auth/myreservations/");

  return (
    <main className="max-w-[1500px] mx-auto px-6 pb-6">
      <h1 className="mt-6 mb-2 text-2xl">My reservations</h1>

      <div className="space-y-4">
        {reservations.map((reservation: any) => (
          <div
            key={reservation.id}
            className="p-5 mt-4 grid grid-cols-1 md:grid-cols-4 gap-4 shadow-md border border-gray-300 rounded-xl"
          >
            <div className="col-span-1">
              <div className="relative overflow-hidden aspect-square rounded-xl">
                <Image
                  src={reservation.image || "/Beach_house.jpg"}
                  fill
                  className="hover:scale-110 object-cover transition h-full w-full"
                  alt={reservation.propertyName || "Property Image"}
                />
              </div>
            </div>

            <div className="col-span-1 md:col-span-3">
              <h2 className="mb-4 text-xl">
                {reservation.propertyName || "Property Name"}
              </h2>
              <p className="mb-2">
                <strong>Check in date: </strong>{" "}
                {reservation.checkInDate || "N/A"}
              </p>
              <p className="mb-2">
                <strong>Check out date: </strong>{" "}
                {reservation.checkOutDate || "N/A"}
              </p>
              <p className="mb-2">
                <strong>Number of nights: </strong>{" "}
                {reservation.nights || "N/A"}
              </p>
              <p className="mb-2">
                <strong>Total price: </strong> $
                {reservation.totalPrice || "N/A"}
              </p>
              <div className="mt-6 text-white inline-block cursor-pointer py-4 px-6 bg-airbnb hover:bg-airbnb-dark rounded-xl">
                Go to property
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default MyReservationPage;
