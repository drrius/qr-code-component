import React from "react";
import Image from "next/image";

const QrContainer = () => {
  return (
    <div className="bg-white p-4 flex flex-col justify-center items-start w-80 rounded-[20px] gap-6">
      <Image
        src="/image-qr-code.png"
        alt={"QR code"}
        width={288}
        height={288}
        className="rounded-[10px]"
      />
      <section className="flex flex-col items-center gap-4 self-stretch y-4">
        <h3 className="font-bold text-[22px] text-center font-Outfit self-stretch text-[#1F314F] leading-[26.4px]">
          Improve your frontend skills by building projects
        </h3>
        <p className="text-[15px] text-[#68778D] font-Outfit text-center leading-[21px] tracking-[0.2px]">
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level!
        </p>
      </section>
    </div>
  );
};

export default QrContainer;
