const FeatureJobs=()=>{
    const[jobs,setJobs]=useState([]);
    //this is not the best way to load show all data
    const[dataLength,setDataLength]=useState(4);


    useEffect(()=>{
        fetch('jobs.json')
        .then(res=>res.json())
        .then(data=>setJobs(data));

    })
    return(
        <div className='grid grid-cols-2 gap-6'>
            {
                jobs.slice(0,data).map(job=><job key={job.id} job={job}></job>)
            }
            <div className={dataLength===jobs.length && hidden}>
                <button onClick={()=>setDataLength(jobs.length)} className='btn btn-primary'>Show all jobs</button>
            </div>
            <h2>Feature jobs{jobs.length}</h2>
            <p>Explore thousands of job opportunities with all the information you need. Its your future</p>

        </div>
       
    );
};
export default FeatureJobs;
