/*
 * @copyright   Copyright (C) 2022 AesirX. All rights reserved.
 * @license     GNU General Public License version 3, see LICENSE.
 */

import React from 'react';
import { AesirXSelect } from 'aesirx-uikit';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons/faChevronLeft';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons/faChevronRight';
import styles from './index.module.scss';
import './index.scss';

const PaginationComponent = ({ listViewModel, pagination, pageSize, isList }) => {
  const handleGoToPage = (i) => {
    listViewModel.getPagination(i, isList);
  };

  const handlePreviousFirstPage = () => {
    listViewModel.getPagination(1, isList);
  };

  const handlePreviousLastPage = () => {
    listViewModel.getPagination(pagination.totalPages, isList);
  };

  const handlePreviousPage = () => {
    listViewModel.getPagination(pagination.page - 1, isList);
  };

  const handleNextPage = () => {
    listViewModel.getPagination(pagination.page + 1, isList);
  };

  const paginationHTML = () => {
    let paginationHTML = [];
    let currentNumber = pagination.page;
    for (let i = 1; i <= pagination.totalPages; i++) {
      paginationHTML.push(
        <button
          key={i}
          onClick={() => handleGoToPage(i)}
          className={`btn ${styles.btn} border-1 border-gray-1 p-0 fs-6 m-0 rounded-0 ${
            i === currentNumber ? 'active bg-gray-700 border-gray-1-700 text-white' : 'text-gray-6 '
          } ${
            i === currentNumber - 1 ||
            i === currentNumber - 2 ||
            i === currentNumber - 3 ||
            i === currentNumber + 1 ||
            i === currentNumber + 2 ||
            i === currentNumber + 3
              ? 'visible_number'
              : ''
          }`}
        >
          <span className={i === currentNumber ? '' : 'text-gray-6'}>{i}</span>
        </button>
      );
    }

    return paginationHTML;
  };

  const handleChangeLimit = (object) => {
    listViewModel.getPagination(0, isList, object.value);
  };

  return (
    <>
      <div className="w-150 d-none">
        <AesirXSelect
          defaultValue={{ value: pageSize, label: 'Show ' + pageSize }}
          onChange={handleChangeLimit}
          options={[
            { value: 5, label: 'Show 5' },
            { value: 10, label: 'Show 10' },
            { value: 15, label: 'Show 15' },
            { value: 20, label: 'Show 20' },
          ]}
          className="mb-3 text-danger"
          isBorder={true}
          plColor="rgba(8, 18, 64, 0.8)"
          isMulti={false}
        />
      </div>
      <div className={'ps-3 col-md-12 d-flex justify-content-end'}>
        {/* <button
          onClick={() => handlePreviousFirstPage()}
          disabled={pagination && pagination.page <= 1 ? true : false}
          className={`btn ${styles.btn} border-1 border-gray-1 p-0 text-green`}
        >
          <FontAwesomeIcon icon={faAngleDoubleLeft} />
        </button> */}

        <button
          //onClick={() => previousPage()}
          onClick={() => handlePreviousPage()}
          disabled={pagination && pagination.page <= 1 ? true : false}
          className={`btn ${styles.btn} border-1 border-gray-1 rounded-start p-0 text-gray-6 m-0 rounded-0 `}
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        {pagination && pagination.totalPages > 1 && (
          <button
            onClick={() => handlePreviousFirstPage()}
            className={`btn ${styles.btn} border-1 border-gray-1 p-0 fs-6 m-0 rounded-0 ${
              1 === pagination.page
                ? 'active bg-gray-700 border-gray-1-700 text-white m-0 rounded-0 '
                : 'text-gray-6 '
            }`}
          >
            <span className={1 === pagination.page ? '' : 'text-gray-6'}>1</span>
          </button>
        )}
        <p
          className={`mb-0 d-flex align-items-end ms-2 me-2 text-gray-6  fs-5  text-gray-6 ${
            pagination.page === 1 ||
            pagination.page === 2 ||
            pagination.page === 3 ||
            pagination.page === 4 ||
            pagination.page === 5
              ? 'isHidden'
              : ''
          }`}
        >
          ...
        </p>
        <div className="wr_pagination_number">{paginationHTML()}</div>

        <p
          className={`mb-0 d-flex align-items-end px-2 text-gray-6 align-items-center fs-5 border-1 border-gray-1  text-gray-6 ${
            pagination.page === pagination.totalPages - 4 ||
            pagination.page === pagination.totalPages - 3 ||
            pagination.page === pagination.totalPages - 2 ||
            pagination.page === pagination.totalPages - 1 ||
            pagination.page === pagination.totalPages
              ? 'isHidden'
              : ''
          }`}
        >
          ...
        </p>
        <button
          onClick={() => handlePreviousLastPage()}
          className={`btn ${styles.btn} border-1 border-gray-1 p-0 fs-6 m-0 rounded-0  ${
            pagination.totalPages === pagination.page
              ? 'active bg-gray-700 text-white border-gray-1-700'
              : 'text-gray-6 '
          }`}
        >
          <span className={pagination.totalPages === pagination.page ? '' : 'text-gray-6'}>
            {pagination.totalPages}
          </span>
        </button>
        <button
          onClick={() => handleNextPage()}
          disabled={pagination && pagination.page === pagination.totalPages ? true : false}
          className={`btn ${styles.btn} border-1 border-gray-1 p-0 rounded-end text-gray-6 m-0 rounded-0`}
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
        {/* <button
          onClick={() => handlePreviousLastPage()}
          disabled={
            pagination && pagination.page === pagination.totalPages
              ? true
              : false
          }
          className={`btn ${styles.btn} border-1 border-gray-1 p-0 text-green`}
        >
          <FontAwesomeIcon icon={faAngleDoubleRight} />
        </button> */}
      </div>
    </>
  );
};

export default PaginationComponent;
