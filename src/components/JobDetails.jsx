import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../Utility/LocalStorage";
const JobDetails = () => {

    const jobs = useLoaderData();
    const { id } = useParams()
    const idInt = parseInt(id)
    const job = jobs.find(job => job.id === idInt)


    const handleApplyJob = () => {
        saveJobApplication(idInt);
        toast('you have apply successfully');
    }

    return (
        <div>

            <div className="grid md:grid-cols-4">
                <div className="border md:col-span-3">
                    <h2 className="text-3xl">Details coming here</h2>
                    <h2>Job Details of:{job.job_title}</h2>
                    <p>{job.company_name
                    }</p>
                </div>
                <div className="border">
                    <h2 className="text-2xl">Side thing</h2>
                    <button onClick={handleApplyJob} className="btn btn-primary w-full">Apply Now</button>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default JobDetails;