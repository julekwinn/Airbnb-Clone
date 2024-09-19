import Image from "next/image";

interface CategoriesProps {
  dataCategory: string;
  setCategory: (category: string) => void;
}

const Categories: React.FC<CategoriesProps> = ({
  dataCategory,
  setCategory,
}) => {
  return (
    <>
      <div className="pt-4 cursor-pointer pb-6 flex item-center space-x-12">
        <div
          onClick={() => setCategory("Beach")}
          className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${
            dataCategory === "Beach" ? "border-gray-800" : "border-white"
          } opacity-60 hover:border-gray-200 hover:opacity-100`}
        >
          <Image
            src="/icn_category_beach.jpg"
            alt="Category - Beach"
            width={20}
            height={20}
          />
          <span>Beach</span>
        </div>
        <div
          onClick={() => setCategory("Villas")}
          className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${
            dataCategory === "Villas" ? "border-gray-800" : "border-white"
          } opacity-60 hover:border-gray-200 hover:opacity-100`}
        >
          <Image
            src="/icn_category_villas.jpg"
            alt="Category - Villas"
            width={20}
            height={20}
          />
          <span>Villas</span>
        </div>
        <div
          onClick={() => setCategory("Cabins")}
          className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${
            dataCategory === "Cabins" ? "border-gray-800" : "border-white"
          } opacity-60 hover:border-gray-200 hover:opacity-100`}
        >
          <Image
            src="/icn_category_cabins.jpg"
            alt="Category - Cabins"
            width={20}
            height={20}
          />
          <span>Cabins</span>
        </div>
        <div
          onClick={() => setCategory("Tiny homes")}
          className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${
            dataCategory === "Tiny homes" ? "border-gray-800" : "border-white"
          } opacity-60 hover:border-gray-200 hover:opacity-100`}
        >
          <Image
            src="/icn_category_tiny_homes.jpg"
            alt="Category - Tiny homes"
            width={20}
            height={20}
          />
          <span>Tiny homes</span>
        </div>
      </div>
    </>
  );
};

export default Categories;
