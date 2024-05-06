
import { MdLocationOn } from "react-icons/md";
import { AiOutlineDollar } from "react-icons/ai"; 

const job=({job})=>{
    const{id,logo, job_title,company_name,remote_on_site,location,job_type,salary}=job;

    return(
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{job_title}</h2>
    <p>{company_name}</p>
    <div className="card-actions justify-end">
      <Link to={`/job/${id}`}>
      
      <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] mr-4">{remote_on_site}</button>
      <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] mr-4">{job_type}</button>
      </Link>
    </div>
  </div>
  <div className='mt-4 flex'>
    <h2 className='flex mr-4'><MdLocationOn className='text-2xl mr-2'></MdLocationOn>{location}</h2>
    <h2 className='flex'><AiOutlineDollar className='text-2xl mr-2'></AiOutlineDollar>{salary}</h2>
  </div>
</div>
            <img src={logo} alt=''></img>
            {
                job.map(job=><job key={job.id} job={job}></job>)
            }


        </div>
    );
};
export default job;
