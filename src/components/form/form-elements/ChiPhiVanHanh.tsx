import ComponentCard from "../../common/ComponentCard";
import Label from "../Label";
import Input from "../input/InputField";

export default function ChiPhiVanHanh() {
  return (
    <ComponentCard title= "">
        <p className=" text-sm">Chi phí Vận Hành</p>
      <div className="space-y-6">
        <div>
          <Label htmlFor="input">Lương tài xế</Label>
          <Input type="number" id="input" placeholder="4,000,000" />
        </div>
        <div>
          <Label htmlFor="input">Lương phụ xe</Label>
          <Input type="number" id="input" placeholder="16,676,000" />
        </div>
        <div>
          <Label htmlFor="input">Tổng chi phí vận hành</Label>
          <Input type="number" id="input" placeholder="84,000" />
        </div>
      </div>
    </ComponentCard>
  );
}
