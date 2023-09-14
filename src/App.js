import './App.css';


import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import JobPath from './components/JobPath'
import JOB_PATHS from './data/job-paths'

function App() {
    return (
        <div className="app">
            {JOB_PATHS.map((jobPath, index) => (
                <JobPath key={index} jobPath={jobPath}></JobPath>
            ))}            
        </div>
    );
}

export default App;
