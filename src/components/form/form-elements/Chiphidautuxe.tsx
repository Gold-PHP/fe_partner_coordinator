import ComponentCard from "../../common/ComponentCard";
import Label from "../Label";
import Input from "../input/InputField";

export default function ChiPhiDauTuXe() {
  return (
    <ComponentCard title= "">
        <p className=" text-sm">Chi phí đầu tư xe</p>
      <div className="space-y-6">
        <div>
          <Label htmlFor="input">Số tiền vay</Label>
          <Input type="number" id="input" placeholder="1,660,000" />
        </div>
        <div>
          <Label htmlFor="input">Số tháng vay</Label>
          <Input type="number" id="input" placeholder="16,676,000" />
        </div>
        <div>
          <Label htmlFor="input">Lãi xuất ngân hàng</Label>
          <Input type="number" id="input" placeholder="84,000" />
        </div>
        <div>
          <Label htmlFor="input">Tổng chi phí đầu tư xe</Label>
          <Input type="number" id="input" placeholder="84,000" />
        </div>
      </div>
      <button className="inline-flex items-center justify-center gap-3 py-3 text-sm font-normal text-white transition-colors bg-blue-400 rounded-lg px-7 hover:bg-gray-200 hover:text-gray-800 dark:bg-white/5 dark:text-white/90 dark:hover:bg-white/10">
        Lưu
      </button>
    </ComponentCard>
  );
}
