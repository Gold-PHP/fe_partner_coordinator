import axios from "axios";

const API_BASE_URL = "http://localhost/"; // Thay bằng URL API của bạn

// Interface cho từng trường dữ liệu chi phí
export interface CostField {
  name: string; // Tên trường dữ liệu
  value: number; // Giá trị của trường dữ liệu
}

// Interface cho từng nhóm chi phí
export interface CostGroup {
  groupName: string; // Tên nhóm chi phí (ví dụ: "Chi phí cố định 01")
  fields: CostField[]; // Danh sách các trường dữ liệu trong nhóm
}

// Interface cho dữ liệu chi phí cố định
export interface FixedCostData {
  groups: CostGroup[]; // Danh sách các nhóm chi phí cố định
}

// Interface cho dữ liệu chi phí biến động
export interface VariableCostData {
  groups: CostGroup[]; // Danh sách các nhóm chi phí biến động
}

// Hàm gửi chi phí cố định
export const addFixedCost = async (data: FixedCostData): Promise<void> => {
  try {
    const response = await axios.post(`${API_BASE_URL}/fixed-costs`, data);
    console.log("Fixed cost added successfully:", response.data);
  } catch (error) {
    console.error("Error adding fixed cost:", error);
    throw error;
  }
};

// Hàm gửi chi phí biến động
export const addVariableCost = async (data: VariableCostData): Promise<void> => {
  try {
    const response = await axios.post(`${API_BASE_URL}/variable-costs`, data);
    console.log("Variable cost added successfully:", response.data);
  } catch (error) {
    console.error("Error adding variable cost:", error);
    throw error;
  }
};

// Hàm lấy danh sách chi phí cố định
export const getFixedCosts = async (): Promise<FixedCostData[]> => {
  try {
    const response = await axios.get(`${API_BASE_URL}/fixed-costs`);
    return response.data;
  } catch (error) {
    console.error("Error fetching fixed costs:", error);
    throw error;
  }
};

// Hàm lấy danh sách chi phí biến động
export const getVariableCosts = async (): Promise<VariableCostData[]> => {
  try {
    const response = await axios.get(`${API_BASE_URL}/variable-costs`);
    return response.data;
  } catch (error) {
    console.error("Error fetching variable costs:", error);
    throw error;
  }
};