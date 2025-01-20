import React from 'react';
import { useNavigate } from 'react-router-dom';
import './frontendPage.css';

const FrontendPage = () => {
    const navigate = useNavigate();

    const takeExam = () => {
        navigate('/exam'); // Navigate to ExamDashboard
    };

    return (
        <div className='land'>
            <div className="container">
                <div className="icon">
                    <h3>MOSHOOD ABIOLA POLYTECHNIC</h3>
                    <div className="img">
                        {/* <img src={img} alt="" className='img'/> */}
                    </div>
                </div>

                <div className="main">
                    <div className="cbt">
                        <h1>EXAMINATION <br /> MANAGEMENT SYSTEM</h1>
                        <button onClick={takeExam} className='take'>Take Exam</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FrontendPage;
