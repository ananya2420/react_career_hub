import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const jobDetails=()=>{
    saveJobApplication(id);
    toast('you have applied successfully');
    
    const jobs=useLoaderData();
    const{id}=useParams()
    const job=jobs.find(job=>job.id===idInt);
    const idInt=parseInt(id);

    console.log(id,jobs);

    const handleApplyJob=()=>{
        toast('you have applied successfully');
    }

    return(
        <div>
            <h2>job details of:{job.job_title}</h2>
            <div className='grid gap-4 md:grid-cols-4'>
                <div className='border md:col-span-3'>
                    <h2 className='text-4xl'>Details coming here</h2>
                    <h2>job details of:{job.job_title}</h2>
                    <p>{job.company_name}</p>
                    <div className='border'>
                    <h2 className='text-2xl'>side things</h2>
                    <button onClick={handleApplyJob} className='btn btn-primary w-full'>Apply now</button>
                </div>
            </div>
            </div>
            <ToastContainer/>

        </div>
    );
};
export default jobDetails;
