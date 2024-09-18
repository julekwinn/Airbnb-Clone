"use client";
import useAddPoroprtyModal from "@/app/hooks/useAddPropertyModal";
import useLoginModal from "@/app/hooks/useLoginModal";

interface AddPropertryButtonProps {
  userId?: string | null;
}

const AddPropertryButton: React.FC<AddPropertryButtonProps> = ({ userId }) => {
  const loginModal = useLoginModal();
  const AddPropertryModal = useAddPoroprtyModal();
  const airbnbYourHome = () => {
    if (userId) {
      AddPropertryModal.open();
    } else {
      loginModal.open();
    }
  };

  return (
    <div
      className="cursor-pointer p-2 text-sm font-semibold rounded-full hover:bg-gray-200"
      onClick={airbnbYourHome}
    >
      {" "}
      DjangoBnb your home
    </div>
  );
};

export default AddPropertryButton;
