import React, {useEffect, useState} from 'react';
import '../../static/css/App.css';
import Axios from "axios";
import { Link } from "react-router-dom";

const FindTitle = ({match}) => {

    const [doList, setDoList] = useState([])

    const [titleList, setTitleList] = useState([])

    useEffect(() => {
        Axios.get('http://localhost:8000/api/ContentType_read_post_all').then((response) => {
            if (response.data != null) {
                setDoList(response.data)
            }
        })

        Axios.get('http://localhost:8000/api/ContentTitle_read_post_all').then((response) => {
            if (response.data != null) {
                setTitleList(response.data)
            }
        })
    }, []);


    return (
        <div className="find-toolbar">
            <div className="find-block">
                <h1>{match.params.name}</h1>
                <div className="find-menu vertical-bottom">
                    <select>
                        <option value="">전체</option>
                        {doList.map((val) => {
                                return (
                                    <option value={val.fields.subject}>{val.fields.subject}</option>
                                )
                            }
                        )}
                    </select>
                    <input className="vertical-bottom"
                           type="text"/>
                    <button className="vertical-bottom">검색</button>
                </div>
            </div>
            <div>
                <table className="find-table">
                    <th className="tb-1">주제</th>
                    <th className="tb-2">제목</th>
                    <th className="tb-3">시간</th>
                    <th className="tb-4">수정/삭제</th>
                    {titleList.map((val) => {
                        return (
                            <tr>
                                <td>{val.fields.subject}</td>
                                <td><Link
                                    to={`/read/id=${val.pk}`}>{val.fields.title}</Link>
                                </td>
                                <td>{val.fields.date}</td>
                                <td>
                                    <button onClick={() => alert('Click2')}/>
                                    <button onClick={() => alert('Click3')}/>
                                </td>
                            </tr>
                        )
                    }
                        )}
                        </table>
                <button><Link to={'/make'}>만들기</Link></button>
                        </div>
                        </div>
                        );
                    };

                    export default FindTitle;