import { useState } from "react";
import SetUpTimeline from "../../components/ui/timeline/SetupTimeline";
import PageChiPhiCoDinh from "./PageChiPhiCoDinh";
import PageChiPhiBienDong from "./PageChiPhiBienDong";
import axios from "axios";

export default function SettingCost() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    chiPhiCoDinh: {}, // Dữ liệu bước 1
    chiPhiBienDong: {}, // Dữ liệu bước 2
  });

  const steps = [
    {
      component: (
        <PageChiPhiCoDinh
          onSave={(data) => setFormData((prev) => ({ ...prev, chiPhiCoDinh: data }))}
        />
      ),
      title: "Bước 1: Chi phí cố định",
      description: "Nhập thông tin chi phí cố định (VNĐ / Ngày).",
    },
    {
      component: (
        <PageChiPhiBienDong
          onSave={(data) => setFormData((prev) => ({ ...prev, chiPhiBienDong: data }))}
        />
      ),
      title: "Bước 2: Chi phí biến động",
      description: "Nhập thông tin chi phí biến động (VNĐ / Chuyến).",
    },
    {
      component: (
        <div className="text-center">
          <h2 className="text-2xl font-bold">Hoàn thành!</h2>
          <p className="text-gray-600">Bạn đã hoàn thành việc cài đặt chi phí.</p>
        </div>
      ),
      title: "Bước 3: Hoàn thành",
      description: "Chúc mừng bạn đã hoàn thành cài đặt chi phí.",
    },
  ];

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleFinish = async () => {
    try {
      const response = await axios.post("http://localhost/api/save-costs", formData);
      console.log("Dữ liệu đã được gửi thành công:", response.data);
      alert("Hoàn thành! Dữ liệu đã được lưu.");
    } catch (error) {
      console.error("Có lỗi xảy ra khi gửi dữ liệu:", error);
      alert("Có lỗi xảy ra khi gửi dữ liệu.");
    }
  };

  return (
    <div>
      <div className="mt-8">
        <SetUpTimeline currentStep={currentStep} steps={steps} />
      </div>
      <div className="mt-6">{steps[currentStep].component}</div>
      <div className="flex justify-between mt-6">
        <button
          onClick={handlePrevious}
          disabled={currentStep === 0}
          className={`px-4 py-2 rounded ${
            currentStep === 0 ? "bg-gray-300 cursor-not-allowed" : "bg-blue-500 text-white"
          }`}
        >
          Quay lại
        </button>
        {currentStep < steps.length - 1 ? (
          <button
            onClick={handleNext}
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            Tiếp theo
          </button>
        ) : (
          <button
            onClick={handleFinish}
            className="px-4 py-2 bg-green-500 text-white rounded"
          >
            Hoàn thành
          </button>
        )}
      </div>
    </div>
  );
}
