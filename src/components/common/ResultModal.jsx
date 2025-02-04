import React from 'react';

const ResultModal = ({ title, content, callbackFn }) => {
    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm"
            onClick={() => {
                if (callbackFn) {
                    callbackFn();
                }
            }}
        >
            <div
                className="relative bg-white dark:bg-gray-800 shadow-2xl rounded-2xl p-6 w-full max-w-md animate-fadeIn"
                onClick={(e) => e.stopPropagation()}  // 모달 내부 클릭 시 닫힘 방지
            >
                {/* 타이틀 */}
                    <div className="text-center text-2xl font-extrabold text-black-800 dark:text-black mb-4">
                        {title || "Modal Title"}
                    </div>

                    {/* 내용 */}
                    <div className="text-center text-lg text-gray-600 dark:text-black-300 border-b-2 border-orange-400 py-4 mb-4">
                        {content || "Your content goes here."}
                    </div>

                    {/* 버튼 */}
                    <div className="flex justify-end">
                        <button
                            className="rounded-lg bg-blue-500 hover:bg-blue-600 px-5 py-2 text-white text-lg transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-300"
                            onClick={() => {
                                if (callbackFn) {
                                    callbackFn();
                                }
                            }}
                        >
                            Close
                        </button>
                    </div>
            </div>
        </div>
    );
};

export default ResultModal;
