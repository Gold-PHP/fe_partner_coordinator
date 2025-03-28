import { useState } from "react";
import ChiPhiCoDinh from "../../components/form/form-elements/Chiphicodinh";
import ChiPhiBaoHiem from "../../components/form/form-elements/Chiphibaohiem";
import ChiPhiCauDuong from "../../components/form/form-elements/Chiphicauduong";
import ChiPhiDauTuXe from "../../components/form/form-elements/Chiphidautuxe";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function PageChiPhiCoDinh({ onSave }: { onSave: (data: any) => void }) {
  const [chiPhiCoDinh, setChiPhiCoDinh] = useState({});
  const [chiPhiBaoHiem, setChiPhiBaoHiem] = useState({});
  const [chiPhiCauDuong, setChiPhiCauDuong] = useState({});
  const [chiPhiDauTuXe, setChiPhiDauTuXe] = useState({});

  const handleSave = () => {
    const allData = {
      chiPhiCoDinh,
      chiPhiBaoHiem,
      chiPhiCauDuong,
      chiPhiDauTuXe,
    };
    onSave(allData); // Truyền dữ liệu lên component cha
  };

  return (
    <div>
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
        <div className="space-y-6">
          <ChiPhiCoDinh onChange={(data) => setChiPhiCoDinh(data)} />
          <ChiPhiCauDuong onChange={(data) => setChiPhiCauDuong(data)} />
        </div>
        <div className="space-y-6">
          <ChiPhiBaoHiem onChange={(data) => setChiPhiBaoHiem(data)} />
          <ChiPhiDauTuXe onChange={(data) => setChiPhiDauTuXe(data)} />
        </div>
      </div>
      <div className="mt-6">
        <button
          onClick={handleSave}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Lưu
        </button>
      </div>
    </div>
  );
}
