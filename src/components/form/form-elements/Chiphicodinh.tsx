import ComponentCard from "../../common/ComponentCard";
import Label from "../Label";
import Input from "../input/InputField";

export default function ChiPhiCoDinh() {
  return (
    <ComponentCard title="">
      <p className=" text-sm">Chi phí khấu hao</p>
      <div className="space-y-6">
        <div>
          <Label htmlFor="input">Giá đầu tư xe</Label>
          <Input type="number" id="input" placeholder="2,000,000,000 VNĐ" />
        </div>
        <div>
          <Label htmlFor="input">Hãng xe</Label>
          <Input type="text" id="input" placeholder="HINO" />
        </div>
        <div>
          <Label htmlFor="input">Phần trăm khấu hao</Label>
          <Input type="number" id="input" placeholder="6,67" />
        </div>
        <div>
          <Label htmlFor="input">Tổng khẩu hao</Label>
          <Input type="number" id="input" placeholder="24,645" />
        </div>
      </div>
      <button className="inline-flex items-center justify-center gap-3 py-3 text-sm font-normal text-white transition-colors bg-blue-400 rounded-lg px-7 hover:bg-gray-200 hover:text-gray-800 dark:bg-white/5 dark:text-white/90 dark:hover:bg-white/10">
        Lưu
      </button>
    </ComponentCard>
  );
}
