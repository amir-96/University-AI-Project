import Image from "next/image";

import { BsGithub } from "react-icons/bs";

const PersonalBoxComponent = () => {
  return (
    <>
      <span className="relative m-auto h-20 w-20 overflow-hidden rounded-full shadow-lg ring-2 md:h-[100px] md:w-[100px] tablet:h-[140px] tablet:w-[140px]">
        <a href="https://github.com/amir-96" target="_blank">
          <Image src="/images/Amir.jpeg" alt="Myself" fill />
        </a>
      </span>
      <div className="mx-auto h-fit w-fit rounded-md p-4 shadow-sm transition-all duration-500 hover:ring-1 hover:ring-blue-400">
        <div className="items-center justify-between md:flex">
          <div className="flex items-center gap-2">
            <BsGithub className="scale-150 text-black" />
            <p className="min-w-[150px]">گیت هاب من:</p>
          </div>
          <a href="https://github.com/amir-96" target="_blank">
            github.com/amir-96
          </a>
        </div>
      </div>
    </>
  );
};

export default PersonalBoxComponent;
