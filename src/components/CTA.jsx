import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className='cta'>
      <p className='cta-text'>
        Lorem, ipsum dolor sit ? <br className='sm:block hidden' />
        Lorem, ipsum dolor sit !
      </p>
      <Link to='/contact' className='btn'>
        Contact
      </Link>
    </section>
  );
};

export default CTA;
