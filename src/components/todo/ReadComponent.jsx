import React, { useEffect, useState } from "react";
import { getOne } from "../../api/todoApi";
import useCustomMove from "../../hooks/useCustomMove";

const initState = {
  tno: 0,
  title: "",
  writer: "",
  dueDate: "",
  complete: false,
};

const ReadComponent = ({ tno }) => {
  const [todo, setTodo] = useState(initState);

  const { moveToList } = useCustomMove();

  useEffect(() => {
    getOne(tno).then((data) => {
      console.log(data);
      setTodo(data);
    });
  }, [tno]);
  return (
    <div className="boreder-2 border-sky-200 mt-10 m-2 p-4">
      {makeDiv("Tno", todo.tno)}
      {makeDiv("Title", todo.title)}
      {makeDiv("Writer", todo.writer)}
      {makeDiv("DueDate", todo.dueDate)}
      {makeDiv("Complete", todo.complete ? "Completed" : "Not Completed")}

      <div className="flex justify-end p-4">
        <button
          type="button"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
          onClick={() => moveToList(todo)}
        >
          Move to List
        </button>
      </div>
    </div>
  );
};

const makeDiv = (title, value) => (
  <div className="flex justify center">
    <div className="relative mb-4 flex w-full flex-wrap items-stretch">
      <div className="w 1/5 p-6 text right font-bold">{title}</div>
      <div className="w 4/5 p-6 rounded-r border border-solid shadow md">
        {value}
      </div>
    </div>
  </div>
);

export default ReadComponent;
