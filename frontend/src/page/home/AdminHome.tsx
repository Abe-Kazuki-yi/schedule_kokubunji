import MainLayout from "@/layout/MainLayout";
import AdminOnlyMenu from "@/components/admin/AdminOnlyMenu";

export default function AdminHome() {
  return (
    <MainLayout sidebar={<AdminOnlyMenu />}>
      <h2>管理者ホーム</h2>
    </MainLayout>
  );
}