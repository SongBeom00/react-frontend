import React from 'react';
import {Pagination} from "react-bootstrap";
import {current} from "@reduxjs/toolkit";
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
            {serverData.prev && (
                <Pagination.Prev
                    onClick={() => movePage({ page: serverData.prevPage })}
                />
            )}

            {/* 페이지 번호 표시 */}
            {serverData.pageNumList.map(pageNum => (
                <Pagination.Item
                    key={pageNum}
                    active={pageNum === serverData.current}
                    onClick={() => movePage({ page: pageNum })}
                >
                    {pageNum}
                </Pagination.Item>
            ))}

            {/* 다음 페이지로 이동 */}
            {serverData.next && (
                <Pagination.Next
                    onClick={() => movePage({ page: serverData.nextPage})}
                    disabled={current === serverData.totalPage}
                />
            )}

            {/* 마지막 페이지로 이동 */}
            <Pagination.Last
                onClick={() => movePage({ page: serverData.totalPage })}
                disabled={current === serverData.totalPage}
            />
        </Pagination>
    );
};

export default PageComponent;