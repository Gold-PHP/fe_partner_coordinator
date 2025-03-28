import ComponentCard from "../../common/ComponentCard";
import Label from "../Label";
import Input from "../input/InputField";

export default function ChiPhiQuaTramThuPhi() {
  return (
    <ComponentCard title= "">
        <p className=" text-sm">Chi phí qua trạm thu phí</p>
      <div className="space-y-6">
        <div>
          <Label htmlFor="input">Giá vé 1 lần qua trạm</Label>
          <Input type="number" id="input" placeholder="4,000,000" />
        </div>
        <div>
          <Label htmlFor="input">Số lần qua trạm</Label>
          <Input type="number" id="input" placeholder="16,676,000" />
        </div>
        <div>
          <Label htmlFor="input">Tổng trạm</Label>
          <Input type="number" id="input" placeholder="84,000" />
        </div>
      </div>
    
    </ComponentCard>
  );
}
