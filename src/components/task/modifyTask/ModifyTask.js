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
                        <input type="text" name="task_description" placeholder="Mô tả..." required />
                    </th>
                </tr>
                <tr>
                    <th>
                        <label for="date">Thời gian làm việc: </label>
                    </th>
                    <th>
                        <input type="date" name="task_date" required />
                    </th>
                </tr>
                <tr>
                    <th>
                        <label for="vehicle">Xe: </label>
                    </th>
                    <th>
                        <input type="text" name="task_vehicle" placeholder="Loại xe, số lượng xe,..." required />
                    </th>
                </tr>
                <tr>
                    <th>
                        <label for="MCP">Các MCPs cần đến: </label>
                    </th>
                    <th>
                        <input type="text" name="MCP" placeholder="Các MCPs..." required />
                    </th>
                </tr>
                <tr>
                    <th>
                        <label for="route">Tuyến đường di chuyển: </label>
                    </th>
                    <th>
                        <input type="text" name="task_route" placeholder="Đường di chuyển..." required />
                    </th>
                </tr>
                <tr>
                    <th>
                        <label for="progress">Tiến độ: </label>
                    </th>
                    <th>
                        <input type="text" name="task_progress" required />
                    </th>
                </tr>
                <tr>
                    <th>
                        <label for="comment">Nhận xét: </label>
                    </th>
                    <th>
                        <input type="text" name="task_comment" required />
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
                <span class="close" onClick={close_modal}>&times;</span>
                <div class="container">
                    <h3>Xác nhận xóa nhiệm vụ?</h3>
                    <div class="area-verify">
                        <table>
                            <tr>
                                <th className="verify">
                                <Link to="/task/detail"><button>Xác nhận</button></Link>
                                </th>
                                <th className="cancel" onClick={close_modal}>
                                    <button>Hủy</button>
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