import Image from "next/image";

import { BsGithub } from "react-icons/bs";

const PersonalBoxComponent = () => {
  return (
    <>
      <span className="relative w-20 h-20 md:w-[100px] md:h-[100px] tablet:w-[140px] tablet:h-[140px] rounded-full shadow-lg overflow-hidden ring-2 m-auto">
        <a href="https://github.com/amir-96">
          <Image src="/images/Amir.jpeg" alt="Myself" fill />
        </a>
      </span>
      <div className="w-fit h-fit rounded-md shadow-sm p-4 mx-auto">
        <div className="md:flex items-center justify-between">
          <div className="flex items-center gap-2">
            <BsGithub className="scale-150 text-black" />
            <p className="min-w-[150px]">گیت هاب من:</p>
          </div>
          <a href="https://github.com/amir-96">github.com/amir-96</a>
        </div>
      </div>
    </>
  );
};

export default PersonalBoxComponent;
