import "./ModifyTask.css"
import {Link} from 'react-router-dom';

const ModifyTask = () => {

    const click_modal = () => {
        document.getElementById("myModal").style.display = "block";
    }

    const close_modal = () => {
        document.getElementById("myModal").style.display = "none";
    }

    return (
    <>
        <div class="task-detail">
            <div className="task-header">
                NHIỆM VỤ CHO COLLECTOR
            </div>
            <div className="staff-box">
                <span><strong>Bùi Trần Nhật Thanh</strong></span>
            </div>
        </div>
        <div className="staff-task">
            <span>Công việc 1 - Thứ Ngày Tháng Năm</span>
        </div>
        <div className="staff-task-info">
            <table>
                <tr>
                    <th className="col-name-info-task">
                        <label for="task_description">Mô tả công việc: </label>
                    </th>
                    <th>
                        Quét rác.
                    </th>
                </tr>
                <tr>
                    <th>
                        <label for="date">Thời gian làm việc: </label>
                    </th>
                    <th>
                        7am, Thứ 5
                    </th>
                </tr>
                <tr>
                    <th>
                        <label for="vehicle">Xe: </label>
                    </th>
                    <th>
                        5 chiếc xe đẩy.
                    </th>
                </tr>
                <tr>
                    <th>
                        <label for="MCP">Các MCPs cần đến: </label>
                    </th>
                    <th>
                        MCP Quận 1, MCP Quận 2 hoặc MCP Quận 3.
                    </th>
                </tr>
                <tr>
                    <th>
                        <label for="route">Tuyến đường di chuyển: </label>
                    </th>
                    <th>
                        Xa lộ Hà Nội đến đường Điện Biên Phủ ....
                    </th>
                </tr>
                <tr>
                    <th>
                        <label for="progress">Tiến độ: </label>
                    </th>
                    <th>
                        Đã hoàn thành.
                    </th>
                </tr>
                <tr>
                    <th>
                        <label for="comment">Nhận xét: </label>
                    </th>
                    <th>
                        Tốt.
                    </th>
                </tr>
            </table>    
        </div>
        <div className="staff-task-verify">
            <table>
                <tr>
                    <th className="delete" onClick={click_modal}>
                        <button className="modi">Xóa</button>
                    </th>
                    <th className="update">
                        <button className="modi">Chỉnh sửa</button>
                    </th>
                </tr>
            </table>
        </div>

        <div id="myModal" class="modal">
            <div class="modal-content">
                <div>
                    <span class="close" onClick={close_modal} id="right-div">&times;</span>
                </div><br></br>
                <div class="container">
                    <h3>Xác nhận xóa nhiệm vụ?</h3>
                    <div class="area-verify">
                        <table>
                            <tr>
                                <th className="verify">
                                <Link to="/task/detail"><button className="modi">Xác nhận</button></Link>
                                </th>
                                <th className="cancel" onClick={close_modal}>
                                    <button className="modi">Hủy</button>
                                </th>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </>
    );
}

export default ModifyTask;