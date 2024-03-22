import { useEffect, useState } from "react";


const FeatureJobs = () => {


    const [jobs, setJobs] = useState([]);
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
            </div>
        </div>
    );
};

export default FeatureJobs;