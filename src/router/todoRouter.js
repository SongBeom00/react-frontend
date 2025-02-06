import { lazy, Suspense } from "react";
import { Navigate } from "react-router-dom";
import Loading from "../components/common/Loading";

// Suspense 로 감싸는 공통 함수
const loadComponent = (Component) => (
    <Suspense fallback={<Loading />}>
      <Component />
    </Suspense>
);

// Lazy 로딩된 컴포넌트 목록
const routes = [
  { path: "list", component: lazy(() => import("../pages/todo/ListPage")) },
  { path: "read/:tno", component: lazy(() => import("../pages/todo/ReadPage")) },
  { path: "add", component: lazy(() => import("../pages/todo/AddPage")) },
  { path: "modify/:tno", component: lazy(() => import("../pages/todo/ModifyPage")) },
];

const todoRouter = () => {
  return [
    // 동적 라우팅 처리
    ...routes.map(({ path, component }) => ({
      path,
      element: loadComponent(component),
    })),

    // 기본 경로 리디렉션 설정
    {
      path: "",
      element: <Navigate replace to="list" />, // 기본 경로로 이동
    },
  ];
};

export default todoRouter;