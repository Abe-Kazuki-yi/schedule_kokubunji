import MainLayout from "@/layout/MainLayout";
import AdminOnlyMenu from "@/components/admin/AdminOnlyMenu";

export default function AdminHome() {
  return (
    <MainLayout>
      <h2>管理者ホーム</h2>
      <AdminOnlyMenu />
    </MainLayout>
  );
}