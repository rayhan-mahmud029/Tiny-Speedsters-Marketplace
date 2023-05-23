import ReactStarsRating from 'react-awesome-stars-rating';
import { Link } from 'react-router-dom';


export const ToyCard = ({ toy }) => {


    return (
        <div className="card w-full bg-base-100 shadow-xl">
            <figure><img src={toy.picture} alt="Shoes" className='h-52 w-full object-cover' /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {toy.name}
                </h2>
                <div className="card-actions flex justify-between">
                    <ReactStarsRating value={toy.ratings} className='flex gap-1' size={20} readonly />
                    <div className="badge badge-outline p-2">Price: ${toy.price}</div>
                </div>
            </div>
            <div className='w-full'>
                <Link to={`/toy/${toy._id}`}>
                    <button className="btn w-full rounded-none rounded-b-md bg-[#75A4DA] border-none" >View Details</button>
                </Link>
            </div>
        </div>
    );
}