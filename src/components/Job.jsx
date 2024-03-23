import { AiOutlineDollarCircle } from "react-icons/ai";
import { IoLocationOutline } from "react-icons/io5";
import { Link } from "react-router-dom";


const Job = ({ job }) => {

    const {id, logo, job_title, company_name, remote_or_onsite, location, job_type, salary, job_description } = job;

    return (
        <div className="">
            <div className="card card-compact  bg-base-200 shadow-xl p-4 items-center justify-center space-y-5">
                <figure><img className="w-32" src={logo} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{job_title}</h2>
                    <p>{company_name}</p>
                    <div>
                        <button className="px-5 py-2 font-bold border-2 rounded-lg border-purple-500 text-purple-500 mr-4">{remote_or_onsite}</button>
                        <button className="px-5 py-2 font-bold border-2 rounded-lg border-purple-500 text-purple-500">{job_type}</button>
                    </div>
                    <div className="flex">
                        <h2 className="flex mr-2"><IoLocationOutline className="text-xl"></IoLocationOutline>{location}</h2>
                        <h2 className="flex"><AiOutlineDollarCircle className="text-xl"></AiOutlineDollarCircle>{salary} </h2>
                    </div>
                    <div className="card-actions justify-center">
                       <Link to={`/job/${id}`}>
                       <button className="btn btn-primary bg-purple-500 border-none">View Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Job;