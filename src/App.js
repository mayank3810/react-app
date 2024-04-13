import React, { useState } from "react";
import Pagination  from "rc-pagination";

function App() {

      
      const [size, setSize] = useState(10);
      const [current, setCurrent] = useState(1);
  
      const PerPageChange = (value) => {
          setSize(value);
      }
  
      const getData = (current, pageSize) => {
        // get data from the api - https://dummyjson.com/posts?skip=30&limit=5
         
      };
  
      const PaginationChange = (page, pageSize) => {
          setCurrent(page);
          setSize(pageSize)
      }
  
      const PrevNextArrow = (current, type, originalElement) => {
          if (type === 'prev') {
              return <button><i className="fa fa-angle-double-left"></i></button>;
          }
          if (type === 'next') {
              return <button><i className="fa fa-angle-double-right"></i></button>;
          }
          return originalElement;
      }
  
      return (
          <>
              <div className="container-fluid mt-5 mb-5">
                  <div className="row justify-content-center">
                      <div className="col-md-10">
                          <div className="card">
                          <div className="card-body p-0">
                              <div className="table-responsive">
                                  <table className="table table-text-small mb-0">
                                      <thead className="thead-primary table-sorting">
                                          <tr>
                                              <th>#</th>
                                              <th>Title</th>
                                              <th>Body</th>
                                              <th>User Id</th>
                                              <th>Reactions</th>
                                              <th>Tags</th>
                                          </tr>
                                      </thead>
                                      <tbody>
                                          
                                      </tbody>
                                  </table>
                              </div>
                            <div className="table-filter-info">
                                  
                                  <Pagination
                                      className="pagination-data"
                                      showTotal={(total, range) => `Showing ${range[0]}-${range[1]} of ${total}`}
                                      onChange={PaginationChange}
                                      total={0}
                                      current={current}
                                      pageSize={size}
                                      showSizeChanger={false}
                                      itemRender={PrevNextArrow}
                                      onShowSizeChange={PerPageChange}
                                  />
                              </div>
                          </div>
                      </div>
                      </div>
                  </div>
              </div>
          </>
      );
}

export default App