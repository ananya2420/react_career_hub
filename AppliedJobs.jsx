const AppliedJobs=()=>{
    const jobs=useLoaderData();

    const[AppliedJobs,setAppliedJobs]=useState([]);
    const[displayJobs,setDisplayJobs]=useState([]);



    useEffect(()=>{
        const storedJobId=getStoredJobApplication();
        if(jobs.length>0){
            const jobsApplied=jobs.filter(job=>storedJobId.includes(job.id))
            console.log(jobs, storedJobId,jobsApplied)
        }
        const jobApplied=[];
        for(const id of storedJobId){
            const job=jobs.find(job=>job.id===id);
            if(job){
                jobApplied.push(job);
                
            }
        }

        const handleJobsFilter=filter=>{
            if(filter==='all'){
                setDisplayJobs(AppliedJobs);
            }
            else if(filter==='remote'){
                const remoteJobs=appliedJobsfilter(job=>job.remote_on_site==='remote');
                setDisplayJobs(remoteJobs);


            }
            else if(filter==='onSite'){

                const onSiteJobs=appliedJobsfilter(job=>job.remote_on_site==='onSite')
                setDisplayJobs(onSiteJobs);
            }
        }
        setAppliedJobs(jobApplied);
        setDisplayJobs(jobApplied);
    },[jobs])
    return(
        <div>
            <h2 className='text-2xl'>job i applied{AppliedJobs.length}</h2>

            <details className="dropdown">
  <summary className="m-1 btn">open or close</summary>
  <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
    <li onClick={()=>handleJobsFilter('all')}><a>All</a></li>
    <li onClick={()=>handleJobsFilter('Remote')}><a>Remote</a></li>
    <li onClick={()=>handleJobsFilter('onSite')}><a>onSite</a></li>
  </ul>
</details>

            <ul>
                {
                    AppliedJobs.map(job=><li key={job.id}><span>{job.job_title}{job.company_name}{remote_on_site}</span></li>)
                }
            </ul>
        </div>
    );
};
export default AppliedJobs;