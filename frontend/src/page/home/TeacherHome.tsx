import MainLayout from "@/layout/MainLayout";
import TeacherOnlyMenu from "@/components/teacher/TeacherOnlyMenu";

export default function TeacherHome() {
  return (
    <MainLayout sidebar={<TeacherOnlyMenu />}>
      <h2>講師ホーム</h2>
    </MainLayout>
  );
}