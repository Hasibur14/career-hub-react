import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../Utility/LocalStorage";


const AppliedJobs = () => {

    const jobs = useLoaderData();

    const [appliedJobs, setAppliedJobs] = useState();

    useEffect(() => {
        const storedJobIds = getStoredJobApplication();
        if (jobs.length > 0) {
            const jobsApplied = []
            for (const id of storedJobIds){
              const job = jobs.find(job => job.id === id);
              if(job){
                jobsApplied.push(job);
              }
    }
    setAppliedJobs(jobsApplied)
}
}, []);

return (
    <div>
        <h2 className="text-2xl">Jobs I applied: {appliedJobs.length}</h2>
        <ul>
            {
                appliedJobs.map(job => <li key={job.id}><span>{job.job_title} {job.company_name}</span></li>)
            }
        </ul>
    </div>
);
};

export default AppliedJobs;