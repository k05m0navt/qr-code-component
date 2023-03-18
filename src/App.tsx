import qrCode from "./assets/image-qr-code.png";
import { QRCodeCard } from "./components";

const App = () => {
  return (
    <div className="w-screen h-screen bg-[#d6e2f0] flex justify-center items-center">
      <QRCodeCard qrCode={qrCode} />
    </div>
  );
};

export default App;
