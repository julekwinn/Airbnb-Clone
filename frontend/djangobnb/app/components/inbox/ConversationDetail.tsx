"use client";
import CustomButton from "../forms/CustomButton";

const ConversationDetail = () => {
  return (
    <div>
      <div className="max-h-[400px] overflow-auto flex flex-col space-y-4">
        <div className="w-[80%] py-4 px-6 rounded-xl bg-gray-200">
          <p className="font-bold text-gray-500">John Doe</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo,
            blanditiis?
          </p>
        </div>
        <div className="w-[80%] ml-[20%] py-4 px-6 rounded-xl bg-blue-200">
          <p className="font-bold text-gray-500">Emily Paris</p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit ea voluptate eveniet ipsam quia nulla est maxime ullam
            excepturi veniam!
          </p>
        </div>
      </div>
      <div className="mt-4 py-4 px-6 flex border border-gray-300 space-x-4 rounded-xl">
        <input
          type="text"
          placeholder="Type your message..."
          className="w-full p-2 bg-gray-100 rounded-xl"
        />
        <CustomButton
          label="Send"
          onClick={() => console.log("Button pressed")}
          className="w-[100px]"
        />
      </div>
    </div>
  );
};

export default ConversationDetail;
