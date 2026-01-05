import MainLayout from "@/layout/MainLayout";
import StudentOnlyMenu from "@/components/student/StudentOnlyMenu";

export default function StudentHome() {
  return (
    <MainLayout sidebar={<StudentOnlyMenu />}>
      <h2>生徒ホーム</h2>
    </MainLayout>
  );
}