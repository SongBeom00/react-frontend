import React, { useEffect, useState } from 'react';
import useCustomMove from "../../hooks/useCustomMove";
import { getList } from "../../api/todoApi";
import "./css/ListComponent.css"
import PageComponent from "../common/PageComponent";



const initState = {
    dtoList: [],
    pageRequestDto: null,
    pageNumList: [],
    prev: false,
    next: false,
    totalCount: 0,
    prevPage: 0,
    nextPage: 0,
    totalPage: 0,
    current: 0
};

const ListComponent = () => {
    const { page, size , refresh, moveToList, moveToRead } = useCustomMove();
    const [serverData, setServerData] = useState(initState);

    useEffect(() => {
        getList({ page, size }).then(res => {
            console.log(res);
            setServerData(res);
        });
    }, [page, size, refresh]);

    return (
        <div className="list-container">
            <h1>📋 Todo List</h1>
            <table className="todo-table">
                <thead>
                <tr>
                    <th>#</th>
                    <th>Title</th>
                    <th>Writer</th>
                    <th>Due Date</th>
                    <th>Status</th>
                </tr>
                </thead>
                <tbody>
                {serverData.dtoList.length === 0 ? (
                    <tr>
                        <td colSpan="5" className="no-tasks">No tasks available</td>
                    </tr>
                ) : (
                    serverData.dtoList.map(dto => (
                        <tr key={dto.tno}>
                            <td>{dto.tno}</td>
                            <td className="title-cell" onClick={() => moveToRead(dto.tno)}>{dto.title}</td>
                            <td>{dto.writer}</td>
                            <td>{new Date(dto.dueDate).toLocaleDateString()}</td>
                            <td className={dto.complete ? "status-completed" : "status-pending"}>
                                {dto.complete ? "Completed ✅" : "Pending ❌"}
                            </td>
                        </tr>
                    ))
                )}
                </tbody>
            </table>

            <PageComponent serverData={serverData} movePage={moveToList}/>
        </div>
    );
};

export default ListComponent;
