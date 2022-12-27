import React from 'react';

const ContactSection = () => {
  return (
    <section className="container mx-auto px-4">
      <div className="pb-10 pt-12">
        <h2 className="text-slate-900 text-5xl text-center font-italiano">
          Hubungi kami
        </h2>
      </div>
      <div className="flex flex-col-reverse md:flex-row justify-center items-start">
        <div className="w-full max-w-[400px] md:max-w-[600px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.1207753542208!2d105.97986151404697!3d-6.506392565418298!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e4247e8aba0b477%3A0xa1c55947e6b85e84!2sPasar%20Picung%20Pandeglang!5e0!3m2!1sen!2sid!4v1671789647956!5m2!1sen!2sid"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full rounded h-[300px]"
          />
        </div>
        <div className="md:ml-8 mb-4 md:mb-0 max-w-[400px] text-center md:text-start">
          <div className="mb-2">
            <span className="block text-primary text-base">Whatsapp :</span>
            <span className="block text-primary text-xl">08138393392939</span>
          </div>
          <div className="mb-2">
            <span className="block text-primary text-base">Email :</span>
            <span className="block text-primary text-xl">dinahijab@gmail.com</span>
          </div>
          <div className="mb-2">
            <span className="block text-primary text-base">Alamat :</span>
            <span className="block text-primary text-xl">
              Jl.Mangga no 34 Jakarta Selatan
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
