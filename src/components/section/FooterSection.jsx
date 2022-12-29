import React from 'react';

const FooterSection = () => {
  return (
    <footer className="bg-primary py-6 mt-8">
      <div className="container mx-auto px-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
        <div className="mb-6">
          <h5 className="text-light font-semibold mb-4">Background</h5>
          <div className="grid gap-1">
            <a
              className="text-light/90 text-sm"
              href="https://www.freepik.com/free-photo/beautiful-women-wearing-hijab_22896306.htm#query=hijab&position=1&from_view=search&track=sph"
              target="_blank"
            >
              Freepik
            </a>
            <a
              className="text-light/90 text-sm"
              href="https://www.freepik.com/free-photo/beautiful-women-wearing-hijab_22896305.htm#query=hijab&position=15&from_view=search&track=sph"
              target="_blank"
            >
              Freepik
            </a>
            <a className="text-light/90 text-sm" target="_blank" href="https://bgjar.com">
              BGJar
            </a>
          </div>
        </div>
        <div className="mb-6">
          <h5 className="text-light font-semibold mb-4">Link</h5>
          <div className="grid gap-1">
            <a
              className="text-light/90 text-sm"
              href="https://www.freepik.com/free-photo/beautiful-women-wearing-hijab_22896306.htm#query=hijab&position=1&from_view=search&track=sph"
              target="_blank"
            >
              Spesial untukmu
            </a>
            <a
              className="text-light/90 text-sm"
              href="https://www.freepik.com/free-photo/beautiful-women-wearing-hijab_22896305.htm#query=hijab&position=15&from_view=search&track=sph"
              target="_blank"
            >
              Kategori pilihan
            </a>
            <a className="text-light/90 text-sm" target="_blank" href="https://bgjar.com">
              Hubungi kami
            </a>
          </div>
        </div>
        <div className="mb-6">
          <h5 className="text-light font-semibold mb-4">Sosial media</h5>
          <div className="grid gap-1">
            <a
              className="text-light/90 text-sm"
              href="https://www.freepik.com/free-photo/beautiful-women-wearing-hijab_22896306.htm#query=hijab&position=1&from_view=search&track=sph"
              target="_blank"
            >
              Instagram
            </a>
            <a
              className="text-light/90 text-sm"
              href="https://www.freepik.com/free-photo/beautiful-women-wearing-hijab_22896305.htm#query=hijab&position=15&from_view=search&track=sph"
              target="_blank"
            >
              Facebook
            </a>
            <a className="text-light/90 text-sm" target="_blank" href="https://bgjar.com">
              Tiktok
            </a>
          </div>
        </div>
      </div>
      <div className="text-center py-4">
        <span className="text-light/90 text-sm">&copy; Dina Hijab 2022</span>
      </div>
    </footer>
  );
};

export default FooterSection;
