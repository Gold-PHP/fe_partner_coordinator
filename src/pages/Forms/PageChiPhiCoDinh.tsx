import PageBreadcrumb from "../../components/common/PageBreadCrumb";
// import DefaultInputs from "../../components/form/form-elements/DefaultInputs";
// import InputGroup from "../../components/form/form-elements/InputGroup";
// import DropzoneComponent from "../../components/form/form-elements/DropZone";
// import CheckboxComponents from "../../components/form/form-elements/CheckboxComponents";
// import RadioButtons from "../../components/form/form-elements/RadioButtons";
// import ToggleSwitch from "../../components/form/form-elements/ToggleSwitch";
// import FileInputExample from "../../components/form/form-elements/FileInputExample";
// import SelectInputs from "../../components/form/form-elements/SelectInputs";
// import TextAreaInput from "../../components/form/form-elements/TextAreaInput";
// import InputStates from "../../components/form/form-elements/InputStates";
import PageMeta from "../../components/common/PageMeta";
import ChiPhiCoDinh from "../../components/form/form-elements/Chiphicodinh";
import ChiPhiBaoHiem from "../../components/form/form-elements/Chiphibaohiem";
import ChiPhiCauDuong from "../../components/form/form-elements/Chiphicauduong";
import ChiPhiDauTuXe from "../../components/form/form-elements/Chiphidautuxe";

export default function PageChiPhiCoDinh() {
  return (
    <div>
      <PageMeta
        title="React.js Form Elements Dashboard | TailAdmin - React.js Admin Dashboard Template"
        description="This is React.js Form Elements  Dashboard page for TailAdmin - React.js Tailwind CSS Admin Dashboard Template"
      />
      <PageBreadcrumb  pageTitle="Cài đặt dữ liệu cho chi phí Cố Định - VNĐ / Ngày" />
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
        <div className="space-y-6">
          <ChiPhiCoDinh/>
          <ChiPhiCauDuong/>
          {/* <DefaultInputs />
          <SelectInputs />
          <TextAreaInput />
          <InputStates /> */}
        </div>
        <div className="space-y-6">
        <ChiPhiBaoHiem/>
        <ChiPhiDauTuXe/>
          {/* <InputGroup />
          <FileInputExample />
          <CheckboxComponents />
          <RadioButtons />
          <ToggleSwitch />
          <DropzoneComponent /> */}
        </div>
      </div>
    </div>
  );
}
