import React, { useEffect, useState } from 'react'
import { fetchUserList } from '../ApiCall'
import InfiniteScroll from "react-infinite-scroll-component";
const ListComponent = () => {
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(false);

    const preload = () => {
        fetchUserList().then((data) => {
            if (data.error) {
                setError(true)
            } else {
                setUsers([...users, ...data.results]);

            }
        });
    };


    

    // const fetchMore = () => {
    //     setTimeout(() => {
    //     fetchUserList().then((data) => {
    //         if (data.error) {
    //             setError(true)
    //         } else {
    //             setUsers([...users, ...data.results]);

    //         }
    //     });
    // }, 1000);
    // };

    useEffect(() => {
        preload()
    },[])

    const errorMessage = () => {
        return (
            <div className="error_Message" style={{ display: error ? "" : "none" }} >
                Something Went Wrong
            </div>
        );
    };
    return (
        <>
            {errorMessage()}
            <InfiniteScroll
                dataLength={users.length}
                next={preload}
                hasMore={true}
                loader={<div className="loader"></div>}
            >
                {users && users.map((element, index) => {
                    return (
                        <div className='list_Items' key={index}>

                            <img src={element.picture.large} alt={element.name.first} />
                            <h4>{element.name.title}. {element.name.first} {element.name.last}</h4>
                            <h4>{element.cell}</h4>

                        </div>
                    )
                })}
            </InfiniteScroll>
        </>
    )
}

export default ListComponent