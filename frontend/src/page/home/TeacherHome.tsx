import MainLayout from "@/layout/MainLayout";
import TeacherOnlyMenu from "@/components/teacher/TeacherOnlyMenu";

export default function TeacherHome() {
  return (
    <MainLayout>
      <h2>受講生ホーム</h2>
      <TeacherOnlyMenu />
    </MainLayout>
  );
}