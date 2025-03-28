
import ChiPhiBaoDuong from "../../components/form/form-elements/ChiPhiBaoDuong";
import ChiPhiLopXe from "../../components/form/form-elements/ChiPhiLopXe";
import ChiPhiNhienLieu from "../../components/form/form-elements/ChiPhiNhienLieu";
import ChiPhiQuaTramThuPhi from "../../components/form/form-elements/ChiPhiQuaTramThuPhi";
import ChiPhiThayAcQuy from "../../components/form/form-elements/ChiPhiThayAcQuy";
import ChiPhiVanHanh from "../../components/form/form-elements/ChiPhiVanHanh";

export default function PageChiPhiBienDong() {
  return (
    <div>
      
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
        <div className="space-y-6">
            <ChiPhiBaoDuong/>
            <ChiPhiThayAcQuy/>
            <ChiPhiQuaTramThuPhi/>
        
        </div>
        <div className="space-y-6">
        <ChiPhiLopXe/>
            <ChiPhiNhienLieu/>
            <ChiPhiVanHanh/>
        </div>
      </div>
    </div>
  );
}
