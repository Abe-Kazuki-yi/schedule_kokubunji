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
export default function MainLayout({ children } : { children: ReactNode }) {
    return (
      <div>
        <CommonHeader />
        <div style={{ display: "flex" }}>
          <CommonSidebar />
  
          <div style={{ padding: "20px", flex: 1 }}>
            {children}
          </div>
        </div>
      </div>
    );
  }