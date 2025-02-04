import React, {useEffect, useState} from 'react';
import {deleteOne, getOne, putOne} from "../../api/todoApi";
import useCustomMove from "../../hooks/useCustomMove";
import ResultModal from "../common/ResultModal";

const initState = {
    tno: 0,
    title: '',
    writer: '',
    dueDate : '',
    complete: false
}

const ModifyComponent = ({tno}) => {

    const [todo, setTodo] = useState(initState);

    const [resultModal , setResultModal] = useState(false);

    //수정 -> 조회
    //삭제 -> 목록
    const { moveToList, moveToRead } = useCustomMove();

    useEffect(() => {

        getOne(tno).then(data => {
            console.log(data);
            setTodo(data);
        });

    }, [tno]);

    const handleChangeTodo = (e) => {
        const {name, value} = e.target;
        setTodo(prevTodo => ({
            ...prevTodo,
            [name]: value
        }));
    }

    const handleChangeTodoComplete = (e) => {
        const value = e.target.value;

        todo.complete = (value === 'Y')

        setTodo({...todo});
    }


    const handleClickDelete = () => {
        deleteOne(tno).then(data => {
            console.log(`DELETE 완료 ${data} `);
            setResultModal('Deleted');
            moveToList();
        });
    }

    const handleClickModify = ()  => {
        putOne(todo).then(data => {
            console.log(`UPDATE 완료 ${data} `);
            setResultModal('Modify');
        });
    }

    const closeModal = () => {
        if(resultModal === 'Modify') {
            moveToRead(tno);
        }
        else{
            moveToList();
        }
    }

    return (
        <div className = "border-2 border-sky-200 mt-10 m-2 p-4">


            <div className="flex justify-center mt-10">
                <div className="relative mb-4 flex w-full flex-wrap items-stretch">
                    <div className="w-1/5 p-6 text-right font-bold">TNO</div>
                    <div className="w-4/5 p-6 rounded-r border border-solid shadow-md bg-gray-100">
                        {todo.tno}
                    </div>
                </div>
            </div>
            <div className="flex justify-center">
                <div className="relative mb-4 flex w-full flex-wrap items-stretch">
                    <div className="w-1/5 p-6 text-right font-bold">WRITER</div>
                    <div className="w-4/5 p-6 rounded-r border border-solid shadow-md bg-gray-100">
                        {todo.writer}
                    </div>

                </div>
            </div>
            <div className="flex justify-center">
                <div className="relative mb-4 flex w-full flex-wrap items-stretch">
                    <div className="w-1/5 p-6 text-right font-bold">TITLE</div>
                    <input className="w-4/5 p-6 rounded-r border border-solid border-neutral-300 shadow-md"
                           name="title"
                           type={'text'}
                           value={todo.title}
                           onChange={handleChangeTodo}
                    >
                    </input>
                </div>
            </div>
            <div className="flex justify-center">
                <div className="relative mb-4 flex w-full flex-wrap items-stretch">
                    <div className="w-1/5 p-6 text-right font-bold">DUEDATE</div>
                    <input className="w-4/5 p-6 rounded-r border border-solid border-neutral-300 shadow-md"
                           name="dueDate"
                           type={'date'}
                           value={todo.dueDate}
                           onChange={handleChangeTodo}
                    >
                    </input>
                </div>
            </div>
            <div className="flex justify-center">
                <div className="relative mb-4 flex w-full flex-wrap items-stretch">
                    <div className="w-1/5 p-6 text-right font-bold">COMPLETE</div>
                    <select
                        name="status"
                        className="border-solid border-2 rounded m-1 p-2"
                        onChange={handleChangeTodoComplete}
                        value = {todo.complete? 'Y':'N'} >
                        <option value='Y'>Completed</option>
                        <option value='N'>Pending</option>
                    </select>
                </div>
            </div>

            <div className="flex justify-end p-4">
                <button type="button"
                        className="inline-block rounded p-4 m-2 text-xl w-32  text-white bg-red-500"
                        onClick={handleClickDelete}
                >
                    Delete
                </button>
                <button type="button"
                        className="rounded p-4 m-2 text-xl w-32 text-white bg-blue-500"
                        onClick={handleClickModify}
                >
                    Modify
                </button>

            </div>
            {resultModal ? <ResultModal title={'처리결과'} content={resultModal} callbackFn={closeModal}></ResultModal>  :<></>}
        </div>
    );

};

export default ModifyComponent;