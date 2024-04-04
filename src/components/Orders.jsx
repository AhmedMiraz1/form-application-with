
import image1 from '../assets/jefferson-sees-5jX_x7-ccuw-unsplash.jpg'
import image2 from '../assets/kirsten-frank-OB62rSdkmw0-unsplash.jpg'
import image3 from '../assets/neom-bA32w6lebJg-unsplash.jpg'
import image4 from '../assets/neom-D1jr0Mevs-c-unsplash.jpg'
import image5 from '../assets/neom-xQhP7RVgA3c-unsplash.jpg'
const Orders = () => {
    return (
        <div className="text-center mt-10  bg-base-300 py-6 px-8 rounded-xl">
            <h1 className='font-bold text-xl my-6 '>Your order here !</h1>
            <ul className='grid grid-cols-1 lg:grid-cols-3 gap-6 '>
                <li><img className='w-full h-full rounded-lg' src={image1} alt="" /></li>
                <li><img className='w-full h-full rounded-lg' src={image2} alt="" /></li>
                <li><img className='w-full h-full rounded-lg' src={image3} alt="" /></li>
                <li><img className='w-full h-full rounded-lg' src={image4} alt="" /></li>
                <li><img className='w-full h-full rounded-lg' src={image5} alt="" /></li>
                <li><img className='w-full h-full rounded-lg' src={image5} alt="" /></li>
            </ul>
            
        </div>
    );
};

export default Orders;