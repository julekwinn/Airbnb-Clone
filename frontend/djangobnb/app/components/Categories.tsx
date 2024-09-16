import Image from "next/image";

const Categories = () => {
  return (
    <div className="pt-6 cursor-pointer pb-6 flex items-center space-x-12">
      <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-200 hover:opacity-100">
        <Image
          src="/icn_category_beach.jpg"
          alt="Category - Beach"
          width={20}
          height={20}
        />
        <span>Beach</span>
      </div>
      <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-200 hover:opacity-100">
        <Image
          src="/icn_category_villas.jpg"
          alt="Category - Beach"
          width={20}
          height={20}
        />
        <span>Villas</span>
      </div>
      <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-200 hover:opacity-100">
        <Image
          src="/icn_category_cabins.jpg"
          alt="Category - Beach"
          width={20}
          height={20}
        />
        <span>Cabins</span>
      </div>
      <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-200 hover:opacity-100">
        <Image
          src="/icn_category_tiny_homes.jpg"
          alt="Category - Beach"
          width={20}
          height={20}
        />
        <span>Tiny homes</span>
      </div>
    </div>
  );
};

export default Categories;
