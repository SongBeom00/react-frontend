import React from 'react';
import {Pagination} from "react-bootstrap";
import "./css/PageComponent.css";

const PageComponent = ({serverData, movePage}) => {

    console.log(serverData);
    // serverData.prev, serverData.next, serverData.page, serverData.totalPage ...

    return (
        <Pagination className="justify-content-center my-4">
            {/* 첫 페이지로 이동 */}
            <Pagination.First
                onClick={() => movePage({ page: 1 })}
                disabled={serverData.current === 1}
            />

            {/* 이전 페이지로 이동 */}

                <Pagination.Prev
                    onClick={() => movePage({ page: serverData.current - 1 })}
                    disabled={serverData.current === 1}
                />

            {/* 페이지 번호 표시 */}
            {serverData.pageNumList.map((pageNum) => (
                <Pagination.Item
                    key={pageNum}
                    active={pageNum === serverData.current}
                    onClick={() => movePage({ page: pageNum })}
                >
                    {pageNum}
                </Pagination.Item>
            ))}

            {/* 다음 페이지로 이동 */}

                <Pagination.Next
                    onClick={() => movePage({ page: serverData.current + 1 })}
                    disabled={serverData.current === serverData.totalPage}
                />

            {/* 마지막 페이지로 이동 */}
            <Pagination.Last
                onClick={() => movePage({ page: serverData.totalPage })}
                disabled={serverData.current === serverData.totalPage}
            />
        </Pagination>
    );
};

export default PageComponent;