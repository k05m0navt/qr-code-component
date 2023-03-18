import { FC } from "react";

type QRCodeCardProps = {
  qrCode?: string;
};

const QRCodeCard: FC<QRCodeCardProps> = ({ qrCode }) => {
  return (
    <div className="bg-white flex flex-col justify-center items-center max-w-[300px] p-3 rounded-2xl gap-6 drop-shadow-md">
      <img src={qrCode} alt="qr-code" className="w-[300px] rounded-lg" />
      <div className="flex flex-col justify-center items-center gap-3 text-center mb-5">
        <p className="font-outfit text-[22px] font-bold text-[#1f3251]">
          Improve you front-end skills by building projects
        </p>
        <p className="font-outfit text-[15px] font-normal  text-[#7b879d] tracking-normal">
          Scan the QR code to visit Frontend Mentor and take you coding skills
          to the next level
        </p>
      </div>
    </div>
  );
};

export default QRCodeCard;
