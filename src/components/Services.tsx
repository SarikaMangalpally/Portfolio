// components/ServicesSection.tsx
import React from 'react';
import { servicesDetails } from '@/controllers/ServicesProvidedController';

const ServicesSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <section className='relative w-full overflow-hidden'>
      <div className='w-full'>
        <h2 className=' text-34 md:text-40'>Services Provided</h2>
        <div className='relative flex z-0'>
          <ul className='flex flex-row space-x-4 w-full'>
              {servicesDetails.map((service) => (
                  <li key={service.id} className='relative flex-none rounded-lg p-4 w-4/5 bg-slate-400'>
                      <h3 className='text-22'>{service.title}</h3>
                      <p>{service.description}</p>
                  </li>
                ))
              }
          </ul>
        </div>
      </div>
      <div className='flex justify-center my-4 space-x-4'>
        <button className='flex items-center justify-center w-12 h-12 bg-slate-50 rounded-full p-5 drop-shadow-lg shadow-slate-950'
        onClick={set}>
          &#8249;
        </button>
        <button className='flex items-center justify-center w-12 h-12 bg-slate-50 rounded-full p-5 drop-shadow-lg shadow-slate-950'>&#8250;</button>
      </div>
    </section>
  );
};

export default ServicesSection;
