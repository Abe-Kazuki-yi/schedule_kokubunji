import MainLayout from "@/layout/MainLayout";
import StudentOnlyMenu from "@/components/student/StudentOnlyMenu";

export default function StudentHome() {
  return (
    <MainLayout>
      <h2>受講生ホーム</h2>
      <StudentOnlyMenu />
    </MainLayout>
  );
}