import React from "react";
import {
  createSearchParams,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
import ReadComponent from "../../components/todo/ReadComponent";

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
    <div className="font-extrabold w-full bg-white mt-6">
      <div className="text-3xl">
        Read Page Compontents {tno}
        </div>

      <ReadComponent  tno={tno} />
  
    </div>
  );
};

export default ReadPage;
