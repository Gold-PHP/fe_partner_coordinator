import ComponentCard from "../../common/ComponentCard";
import Label from "../Label";
import Input from "../input/InputField";

export default function ChiPhiLopXe() {
  return (
    <ComponentCard title= "">
        <p className=" text-sm">Chi phí lốp xe</p>
      <div className="space-y-6">
        <div>
          <Label htmlFor="input">Giá của một lớp xe</Label>
          <Input type="number" id="input" placeholder="4,000,000" />
        </div>
        <div>
          <Label htmlFor="input">Số lớp</Label>
          <Input type="number" id="input" placeholder="16,676,000" />
        </div>
        <div>
          <Label htmlFor="input">Cự ly cần thay lốp</Label>
          <Input type="number" id="input" placeholder="84,000" />
        </div>
        <div>
          <Label htmlFor="input">Tổng lốp xe</Label>
          <Input type="number" id="input" placeholder="84,000" />
        </div>
      </div>
   
    </ComponentCard>
  );
}
