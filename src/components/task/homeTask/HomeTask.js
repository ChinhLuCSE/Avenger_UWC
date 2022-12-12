import "./HomeTask.css"
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { Link } from "react-router-dom";
const HomeTask = ()=>{
    return(
        <div className="home-task">
            <div className="task-header">
                Nhiệm vụ cho collector
            </div>
            <div className="search-task">
                <p>Tìm theo tên: </p>
                <input></input>
            </div>
            <div className="list-task">
                <ul>
                    <li>
                        <div className="left-box"></div>
                        <div className="right-box">
                            <p>Họ tên: Alo Alo</p>
                            <p>Địa chỉ: Alo Alo</p>
                            <Link to="/task/detail" className="view-detail">Xem chi tiết</Link>
                        </div>
                    </li>
                    <li>
                        <div className="left-box"></div>
                        <div className="right-box">
                            <p>Họ tên: Alo Alo</p>
                            <p>Địa chỉ: Alo Alo</p>
                            <Link to="/task/detail" className="view-detail">Xem chi tiết</Link>
                        </div>
                    </li>
                    <li>
                        <div className="left-box"></div>
                        <div className="right-box">
                            <p>Họ tên: Alo Alo</p>
                            <p>Địa chỉ: Alo Alo</p>
                            <Link to="/task/detail" className="view-detail">Xem chi tiết</Link>
                        </div>
                    </li>
                    <li>
                        <div className="left-box"></div>
                        <div className="right-box">
                            <p>Họ tên: Alo Alo</p>
                            <p>Địa chỉ: Alo Alo</p>
                            <Link to="/task/detail" className="view-detail">Xem chi tiết</Link>
                        </div>
                    </li>
                    <li>
                        <div className="left-box"></div>
                        <div className="right-box">
                            <p>Họ tên: Alo Alo</p>
                            <p>Địa chỉ: Alo Alo</p>
                            <Link to="/task/detail" className="view-detail">Xem chi tiết</Link>
                        </div>
                    </li>
                    <li>
                        <div className="left-box"></div>
                        <div className="right-box">
                            <p>Họ tên: Alo Alo</p>
                            <p>Địa chỉ: Alo Alo</p>
                            <Link to="/task/detail" className="view-detail">Xem chi tiết</Link>
                        </div>
                    </li>
                    <li>
                        <div className="left-box"></div>
                        <div className="right-box">
                            <p>Họ tên: Alo Alo</p>
                            <p>Địa chỉ: Alo Alo</p>
                            <Link to="/task/detail" className="view-detail">Xem chi tiết</Link>
                        </div>
                    </li>
                    <li>
                        <div className="left-box"></div>
                        <div className="right-box">
                            <p>Họ tên: Alo Alo</p>
                            <p>Địa chỉ: Alo Alo</p>
                            <Link to="/task/detail" className="view-detail"><span>Xem chi tiết</span></Link>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="view-order-task">
                    <AiOutlineArrowLeft className="arrow"/>
                    <p>1/10</p>
                    <AiOutlineArrowRight className="arrow"/>
            </div>
        </div>

    );
}

export default HomeTask;