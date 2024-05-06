const saveJobApplication=id=>{
    const storedJobApplications=getStoredApplications();
    const exists=storedJobApplications.find(jobId===id)
    if(!exists){
        storedJobApplications.push(id);
        localStorage.setItem('job-application',JSON.stringify(storedJobApplications));
    }

}
    const getStoredJobApplication=()=>{
        const storedJobApplication=localStorage.getItem('job-applications')
        if(storedJobApplication){
            return JSON.parse('stored job aplications')
        }
        return[];


    }


export{saveJobApplication,getStoredJobApplication}