import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import ExamDashboard from './component/ExamDashboard/ExamDashboard';
import ResultPage from './component/ResultPage/ResultPage';
import FrontendPage from './component/FrontendPage/FrontendPage';
import './App.css';

const App = () => {
    const [isExamFinished, setIsExamFinished] = useState(false);
    const [results, setResults] = useState(null);

    const finishExam = (results) => {
        setIsExamFinished(true);
        setResults(results);
    };

    const resetExam = () => {
        setIsExamFinished(false);
        setResults(null);
    };

    return (
        <Router>
            <div className="flex">
                <Routes>
                    <Route path="/" element={<FrontendPage />} />
                    <Route
                        path="/exam"
                        element={
                            !isExamFinished ? (
                                <ExamDashboard finishExam={finishExam} resetExam={resetExam} />
                            ) : (
                                <Navigate to="/results" />
                            )
                        }
                    />
                    <Route path="/results" element={<ResultPage results={results} resetExam={resetExam} />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
