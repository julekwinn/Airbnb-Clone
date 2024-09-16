import Image from "next/image";
import ReservationSideBar from "@/app/components/properties/ReservationSideBar";

const PropertyDetailPage = () => {
  return (
    <main className="max-w-[1500px] mx-auto px-6">
      <div className="w-full h-[64vh] mb-4 overflow-hidden rounded-xl relative">
        <Image
          src="/beach_house.jpg"
          fill
          className="object-cover w-full h-full"
          alt="Beach house"
        ></Image>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <div className="py-6 pr-6 col-span-3">
          <h1 className="mb-4 text-4xl">Property Name</h1>
          <span className="mb-6 block text-lg text-gray-600">
            4 guests - 2 bedrooms - 1 bathroom
          </span>
          <hr />
          <div className="py-6 flex items-center space-x-4">
            <Image
              src="/profile.png"
              width={50}
              height={50}
              className="rounded-full"
              alt="Profile image"
            ></Image>
            <p>
              <strong>Emily Paris</strong> is your host
            </p>
          </div>
          <hr />
          <p className="mt-6">
            Experience the ultimate beachfront getaway in this stunning
            property. Located just steps away from the pristine sandy beach,
            this spacious apartment offers breathtaking ocean views and
            luxurious amenities. With comfortable accommodations for up to 4
            guests, including 2 bedrooms and 1 bathroom, it's the perfect
            retreat for a relaxing vacation. Immerse yourself in the beauty of
            the coastal surroundings and indulge in the tranquility of beachside
            living. Book your stay now and create unforgettable memories at our
            beach house.
          </p>
        </div>
        <ReservationSideBar />
      </div>
    </main>
  );
};

export default PropertyDetailPage;
