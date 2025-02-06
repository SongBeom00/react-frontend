import React from 'react';

const FetchingModal = () => {
    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
            <div
                className="relative bg-white dark:bg-gray-800 shadow-2xl rounded-2xl p-6 w-full max-w-md animate-fadeIn"
                onClick={(e) => e.stopPropagation()}  // 모달 내부 클릭 시 닫힘 방지
            >
                {/* 내용 */}
                <div
                    className="text-center text-lg text-gray-600 dark:text-black-300 border-b-2 border-orange-400 py-4 mb-4">
                    Loading...
                </div>

            </div>
        </div>
    );
};

export default FetchingModal;