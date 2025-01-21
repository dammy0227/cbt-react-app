import React, { useState, useEffect } from 'react';
import Timer from '../Timer/Timer';
import axios from 'axios';
import './exam.css';

const ExamDashboard = ({ finishExam, resetExam }) => {
    const [questions, setQuestions] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [answers, setAnswers] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:4000/api/exam/questions')
            .then(res => setQuestions(res.data))
            .catch(err => console.error(err));
    }, []);

    const handleAnswerChange = (e) => {
        const newAnswers = [...answers];
        newAnswers[currentQuestionIndex] = e.target.value;
        setAnswers(newAnswers);
    };

    const handleSubmit = () => {
        axios.post('http://cbt-node-app.vercel.app/localhost:4000/api/exam/submit', { answers })
            .then(res => finishExam(res.data))
            .catch(err => console.error(err));
    };

    if (questions.length === 0) return <p>Loading...</p>;

    return (
        <div className='exam'>
            <div className="cbt-timer">
                <div className="btn">
                    <button onClick={handleSubmit} className='cbt-button'>Submit</button>
                </div>
                <div className="time">
                    <Timer onTimeUp={handleSubmit} className="timer" />
                </div>
            </div>

            <div className="cbt-exam">
                <div className="question">
                    <h2 className='questions'>Question {currentQuestionIndex + 1}:</h2>
                    <p className='ctb-question'>{questions[currentQuestionIndex].question}</p>
                    <textarea
                        value={answers[currentQuestionIndex] || ''}
                        onChange={handleAnswerChange}
                        className='cbt-answer'
                    ></textarea>
                </div>

                <div className='btn-next'>
                    <button
                        onClick={() => setCurrentQuestionIndex((prev) => Math.max(0, prev - 1))}
                        className='next'
                    >
                        Previous
                    </button>
                    <button
                        onClick={() => setCurrentQuestionIndex((prev) => Math.min(questions.length - 1, prev + 1))}
                        className='next'
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ExamDashboard;
