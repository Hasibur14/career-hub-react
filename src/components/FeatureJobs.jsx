import { useEffect, useState } from "react";
import Job from "./Job";

const FeatureJobs = () => {

    const [jobs, setJobs] = useState([]);

    const [dataLength, setDataLength] = useState(4)

    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [])




    return (
        <div>
            <div className="text-center">
                <h2 className="text-4xl font-bold">Feature Jobs: {jobs.length}</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, praesentium dicta. Repellendus maxime modi ipsum consequuntur officiis labore qui consequatur mollitia! Enim, quo aspernatur aliquam ad quia dolorem recusandae? Quia.</p>
                <div className="grid grid-cols-3">
                    {
                        jobs.slice(0, dataLength).map(job => <Job key={job.id} job={job}></Job>)
                    }
                </div>
                <div className={dataLength === jobs.length && 'hidden'}>
                    <button onClick={() => setDataLength(jobs.length)} className="btn btn-primary text-xl">SEE ALL</button>
                </div>
            </div>
        </div>
    );
};

export default FeatureJobs;