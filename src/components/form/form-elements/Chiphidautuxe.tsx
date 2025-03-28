import ComponentCard from "../../common/ComponentCard";
import Label from "../Label";
import Input from "../input/InputField";
import { useState } from "react";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function ChiPhiDauTuXe({onChange}: {onChange: (data: any) => void}) {
  const [formData, setFormData] = useState({
    field1: "",
    field2: "",
    field3: "",
    field4: "",
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const updatedData = { ...formData, [name]: value };
    setFormData(updatedData);
    onChange(updatedData);
  };

  return (
    <ComponentCard title= "">
        <p className=" text-sm">Chi phí đầu tư xe</p>
      <div className="space-y-6">
        <div>
          <Label htmlFor="input">Số tiền vay</Label>
          <Input onChange={handleChange} value={formData.field1} type="number" id="input" placeholder="1,660,000" />
        </div>
        <div>
          <Label htmlFor="input">Số tháng vay</Label>
          <Input onChange={handleChange} value={formData.field2} type="number" id="input" placeholder="16,676,000" />
        </div>
        <div>
          <Label htmlFor="input">Lãi xuất ngân hàng</Label>
          <Input onChange={handleChange} value={formData.field3} type="number" id="input" placeholder="84,000" />
        </div>
        <div>
          <Label htmlFor="input">Tổng chi phí đầu tư xe</Label>
          <Input onChange={handleChange} value={formData.field4} type="number" id="input" placeholder="84,000" />
        </div>
      </div>
   
    </ComponentCard>
  );
}
