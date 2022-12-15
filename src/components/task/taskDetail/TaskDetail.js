import "./TaskDetail.css"
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { AiOutlineArrowRight } from 'react-icons/ai';
import {Link} from 'react-router-dom';
const TaskDetail = () =>{
    const tasks = [
        {day:31,task:[]},
    ]
    for (let i = 1;i <= 30;i++){
        tasks.push({day:i,task:["Công việc 1","Công việc 2","Công việc 3"]})
    }
    tasks.push({day:1,task:[]})
    tasks.push({day:2,task:[]})
    tasks.push({day:3,task:[]})
    tasks.push({day:4,task:[]})

    return(
        <div class="task-detail">
            <div className="task-header">
                Nhiệm vụ cho collector
            </div>
            <div className="staff-box">
                <span>Bùi Trần Nhật Thanh</span>
                <div className="view-order-task">
                    <AiOutlineArrowLeft className="arrow left-arrow"/>
                        Tháng 12 năm 2022
                    <AiOutlineArrowRight className="arrow right-arrow"/>
                </div>
                <button className="add-task-button"><Link to="/task/addtask">Thêm nhiệm vụ</Link></button>
                <button className="notify-button">Gửi thông báo</button>
            </div>
            <ul className="task-box">
                {
                    tasks.map((task)=>{
                        return(
                            <li>
                                <span>{task.day}</span>
                                <div className="task-list">
                                    {
                                        task.task.map(e=><Link to="/task/modify"><p class="task">{e}</p></Link>)
                                    }
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    );
}

export default TaskDetail;