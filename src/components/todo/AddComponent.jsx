import React, { useState } from 'react';

const initState = {
    title: '',
    writer: '',
    dueDate: '',  // 공백으로 초기화
}

const AddComponent = () => {

    const [todo, setTodo] = useState({ ...initState });

    const handleChangeTodo = (e) => {
        const { name, value } = e.target;
        setTodo(prevTodo => ({
            ...prevTodo,
            [name]: value
        }));
    }

    const handleClickAdd = () => {
        console.log(todo);
    }

    return (
        <div className="p-6 bg-orange-200 min-h-screen flex flex-col items-center justify-center">
            <h1 className="text-2xl font-bold mb-4">Todo AddPage</h1>

            {/* TITLE 입력 필드 */}
            <div className="flex items-center w-full max-w-2xl mb-4">
                <label className="w-1/5 text-right font-bold mr-4">TITLE</label>
                <input
                    className="w-full p-3 rounded border border-neutral-500 shadow-md"
                    name="title"
                    type="text"
                    value={todo.title}
                    onChange={handleChangeTodo}
                />
            </div>

            {/* WRITER 입력 필드 */}
            <div className="flex items-center w-full max-w-2xl mb-4">
                <label className="w-1/5 text-right font-bold mr-4">WRITER</label>
                <input
                    className="w-full p-3 rounded border border-neutral-500 shadow-md"
                    name="writer"
                    type="text"
                    value={todo.writer}
                    onChange={handleChangeTodo}
                />
            </div>

            {/* DUEDATE 입력 필드 */}
            <div className="flex items-center w-full max-w-2xl mb-4">
                <label className="w-1/5 text-right font-bold mr-4">DUEDATE</label>
                <input
                    className="w-full p-3 rounded border border-neutral-500 shadow-md"
                    name="dueDate"
                    type="date"
                    value={todo.dueDate}
                    onChange={handleChangeTodo}
                />
            </div>

            {/* ADD 버튼 */}
            <div className="flex justify-end w-full max-w-2xl">
                <button
                    type="button"
                    className="rounded p-3 w-36 bg-blue-500 text-xl text-white hover:bg-blue-600"
                    onClick={handleClickAdd}
                >
                    ADD
                </button>
            </div>
        </div>
    );
};

export default AddComponent;
