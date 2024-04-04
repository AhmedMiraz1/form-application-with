
import img from '../assets/mehedi1-PhotoRoom (1).png'
const Profile = () => {
    return (
        <div className="text-center mt-14">
            <h1 className="font-bold text-3xl text-green-700 mb-3 font-mono">This is my 
            profile</h1>

            <div className='flex justify-center '><img className='rounded-full w-40 border-4 border-green-600  p-6' src={img} alt="" /></div>
        </div>
    );
};

export default Profile;