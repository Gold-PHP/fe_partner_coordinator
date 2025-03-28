import { useState } from "react";
import ComponentCard from "../../common/ComponentCard";
import Label from "../Label";
import Input from "../input/InputField";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function ChiPhiCoDinh({ onChange }: { onChange: (data: any) => void }) {
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

    // Truyền dữ liệu lên component cha
    onChange(updatedData);
  };

  return (
    <ComponentCard title="">
      <h3 className="text-lg font-bold">Chi Phí Cố Định</h3>
      <div className="space-y-6">
        <div>
          <Label htmlFor="field1">Giá đầu tư xe</Label>
          <Input
            type="number"
            id="field1"
            name="field1"
            value={formData.field1}
            onChange={handleChange}
            placeholder="2,000,000,000 VNĐ"
          />
        </div>
        <div>
          <Label htmlFor="field2">Hãng xe</Label>
          <Input
            type="text"
            id="field2"
            name="field2"
            value={formData.field2}
            onChange={handleChange}
            placeholder="HINO"
          />
        </div>
        <div>
          <Label htmlFor="field3">Phần trăm khấu hao</Label>
          <Input
            type="number"
            id="field3"
            name="field3"
            value={formData.field3}
            onChange={handleChange}
            placeholder="6,67"
          />
        </div>
        <div>
          <Label htmlFor="field4">Tổng khẩu hao</Label>
          <Input
            type="number"
            id="field4"
            name="field4"
            value={formData.field4}
            onChange={handleChange}
            placeholder="24,645"
          />
        </div>
      </div>
    </ComponentCard>
  );
}
