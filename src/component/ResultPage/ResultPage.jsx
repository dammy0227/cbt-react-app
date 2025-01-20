import React from 'react';
import { useNavigate } from 'react-router-dom';
import './result.css';

const ResultPage = ({ results, resetExam }) => {
    const navigate = useNavigate();

    const handleRetakeExam = () => {
        resetExam();  // Reset state in App.js
        navigate('/exam'); // Navigate back to ExamDashboard
    };

    return (
        <div className="result">
            <div className="result-btn">
                <h2 className="score">Your Score: {results?.score || 0}</h2>
                <div className="btn-result">
                    <button onClick={handleRetakeExam} className="btn-retake">Retake Exam</button>
                </div>
            </div>

            <div className="answer">
                <h3>Comparison:</h3>
                {results?.feedback?.map((item) => (
                    <div key={item.questionId}>
                        <hr />
                        <p><strong>Question:</strong> {item.correctAnswer}</p>
                        <p><strong>Your Answer:</strong> {item.userAnswer}</p>
                        <p><strong>Score:</strong> {item.score}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ResultPage;
