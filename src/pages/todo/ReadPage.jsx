import React from "react";
import {
  createSearchParams,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";

const ReadPage = () => {
  const navigate = useNavigate();
  const { tno } = useParams();

  const [queryParams] = useSearchParams();

  const page = queryParams.get("page") ? parseInt(queryParams.get("page")) : 1; //값을 유지할 때 사용한다.
  const size = queryParams.get("size") ? parseInt(queryParams.get("size")) : 10;

  const queryStr = createSearchParams({ page: page, size: size }).toString();

  const moveToModify = () => {
    navigate({ pathname: `/todo/modify/${tno}`, search: queryStr });
  };

  const moveToList = () => {
    navigate({ pathname: `/todo/list`, search: queryStr });
  };

  return (
    <div className="text-3xl">
      TODO ReadPage {tno} 입니다.
      <div>
        <button onClick={moveToModify}>Test Modify</button>
        <button onClick={moveToList}> Test Modify</button>
      </div>
    </div>
  );
};

export default ReadPage;
