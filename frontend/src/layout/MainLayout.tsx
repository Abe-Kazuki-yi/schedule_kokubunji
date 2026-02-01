import type{ ReactNode } from "react";
import CommonHeader from "@/components/utility/CommonHeader";
import CommonSidebar from "@/components/utility/CommonSidebar";
/*
 * ===========================================================
 *  ファイル名 : MainLayout.tsx
 *  概要       : 全ページ共通のレイアウトを定義する。childrenに各ページが入る
 *  作成者     : Fury Kasukabe
 *  作成日     : 2025-11-22
 * ===========================================================
 */
type Props = {
  sidebar?: ReactNode;
  children: ReactNode;
};

export default function MainLayout({ sidebar, children }: Props) {
  return (
    <div>
      <CommonHeader />

      <div style={{ display: "flex", minHeight: "calc(100vh - 60px)" }}>
        {/* 左サイドバー */}
        {sidebar && (
          <aside
            style={{
              width: "200px",
              background: "#f0f0f0",
              borderRight: "1px solid #ddd",
            }}
          >
            {sidebar}
          </aside>
        )}

        {/* メインコンテンツ */}
        <main style={{ flex: 1, padding: "20px" }}>
          {children}
        </main>
      </div>
    </div>
  );
}