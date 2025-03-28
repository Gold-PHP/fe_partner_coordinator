import ComponentCard from "../../common/ComponentCard";
import Label from "../Label";
import Input from "../input/InputField";

export default function ChiPhiThayAcQuy() {
  return (
    <ComponentCard title= "">
        <p className=" text-sm">Chi phí thay ắc quy</p>
      <div className="space-y-6">
        <div>
          <Label htmlFor="input">Giá một bình ắc quy</Label>
          <Input type="number" id="input" placeholder="4,000,000" />
        </div>
        <div>
          <Label htmlFor="input">Cự ly cần thay thế</Label>
          <Input type="number" id="input" placeholder="16,676,000" />
        </div>
        <div>
          <Label htmlFor="input">Tổng Ắc Quy</Label>
          <Input type="number" id="input" placeholder="84,000" />
        </div>
      </div>
      <button className="inline-flex items-center justify-center gap-3 py-3 text-sm font-normal text-white transition-colors bg-blue-400 rounded-lg px-7 hover:bg-gray-200 hover:text-gray-800 dark:bg-white/5 dark:text-white/90 dark:hover:bg-white/10">
        Lưu
      </button>
    </ComponentCard>
  );
}
