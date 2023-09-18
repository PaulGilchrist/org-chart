import './App.css';


import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import JobPath from './components/JobPath'
import JOB_PATHS from './data/job-paths'

function App() {
    return (
        <div className="app">
            <div className="title">
                Job Families & Career Paths
            </div>
            <div className="sub-title">
                Roll over a Job Title to view a description
            </div>
            {JOB_PATHS.map((jobPath, index) => (
                <JobPath key={index} jobPath={jobPath}></JobPath>
            ))}            
        </div>
    );
}

export default App;
