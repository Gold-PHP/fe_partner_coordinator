import ComponentCard from "../../common/ComponentCard";
import Label from "../Label";
import Input from "../input/InputField";

export default function ChiPhiNhienLieu() {
  return (
    <ComponentCard title= "">
        <p className=" text-sm">Chi phí nhiên liệu</p>
      <div className="space-y-6">
        <div>
          <Label htmlFor="input">Giá một lít dầu</Label>
          <Input type="number" id="input" placeholder="4,000,000" />
        </div>
        <div>
          <Label htmlFor="input">Số dầu 1km tiêu thụ</Label>
          <Input type="number" id="input" placeholder="16,676,000" />
        </div>
        <div>
          <Label htmlFor="input">Tổng nhiên liệu</Label>
          <Input type="number" id="input" placeholder="84,000" />
        </div>
      </div>
  
    </ComponentCard>
  );
}
