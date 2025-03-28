import ComponentCard from "../../common/ComponentCard";
import Label from "../Label";
import Input from "../input/InputField";
import { useState } from "react";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function ChiPhiBaoHiem({onChange}: {onChange: (data: any) => void}) {
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
  }

  return (
    <ComponentCard title= "">
        <p className=" text-sm">Chi phí bảo hiểm</p>
      <div className="space-y-6">
        <div>
          <Label htmlFor="input">Bảo hiểm dân sự</Label>
          <Input onChange={handleChange} value={formData.field1} type="number" id="input" placeholder="1,660,000" />
        </div>
        <div>
          <Label htmlFor="input">Bảo hiểm vật chất</Label>
          <Input onChange={handleChange} value={formData.field2} type="number" id="input" placeholder="16,676,000" />
        </div>
        <div>
          <Label htmlFor="input">Bảo hiểm người thứ 3</Label>
          <Input onChange={handleChange} value={formData.field3} type="number" id="input" placeholder="84,000" />
        </div>
        <div>
          <Label htmlFor="input">Tổng bảo hiểm</Label>
          <Input onChange={handleChange} value={formData.field4} type="number" id="input" placeholder="54,732" />
        </div>
      </div>
      
    </ComponentCard>
  );
}
