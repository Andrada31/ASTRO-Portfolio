import React, { useState, useEffect } from "react";

interface ProjectCardProps {
  text_m: string;
  text_s: string;
  image: string;
  logo?: string;
  codeLink: string;
  externalLink: string;
  media?: { type: "image" | "video" | "iframe"; url: string }[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  text_m,
  text_s,
  image,
  logo,
  codeLink,
  externalLink,
  media,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (isModalOpen) {
      const handleNavClick = (e: MouseEvent) => {
        const target = e.target as HTMLElement;
        if (target.closest('#main-nav')) {
          setIsModalOpen(false);
        }
      };
      document.addEventListener('click', handleNavClick);
      return () => document.removeEventListener('click', handleNavClick);
    }
  }, [isModalOpen]);

  const openModal = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <style>{`
        .card {
          width: 30em;
          height: 18em;
          background-color: #111;
          padding: 20px;
          border: 1px solid #333;
          border-radius: 20px;
          cursor: pointer;
          overflow: hidden;
          position: relative;
        }
        @media (max-width: 640px) {
          .card {
            width: 95vw;
            max-width: 22em;
            height: 12em;
          }
          .card_back {
            width: 95vw;
            max-width: 20em;
            height: 8em;
          }
        }
        .card img {
          width: 100%;
          border-radius: 12px;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        .fl {
          display: flex;
          justify-content: flex-end;
          opacity: 0;
          transition: .2s ease-in-out;
          position: absolute;
          top: 0;
          right: 0;
        }
        .main:hover .fl {
          opacity: 1;
          cursor: pointer;
          margin-right: 0.5em;
        }
        .fl:hover .fullscreen {
          scale: 1.2;
        }
        .fl:hover .fullscreen_svg {
          fill: white;
        }
        .card_back {
          position: absolute;
          width: 29em;
          height: 8em;
          background: linear-gradient(180deg, #1b1b1b, #0d0d0d);
          border-radius: 7px;
          border: 1px solid #333;
          margin-top: -11em;
          transition: .2s ease-in-out;
          z-index: -1;
        }
        .main:hover .card_back {
          margin-top: -7em;
          margin-left: 0.5em;
          scale: 1.1;
          height: 12em;
          cursor: pointer;
        }

        .data {
          display: flex;
          flex-direction: row;
          margin-top: 1em;
          padding: 0px 20px 0px 10px;
        }
        .img {
          width: 2em;
          height: 2em;
          background-color: transparent;
          border-radius: 5px;
          overflow: hidden;
        }
        .img img {
          filter: grayscale(1) brightness(0.7) invert(0.7);
        }
        .text {
          display: flex;
          justify-content: center;
          flex-direction: column;
          margin-left: 0.5em;
          font-family: Montserrat;
          color: white;
        }
        .text_m {
          font-weight: bold;
          font-size: 0.9em;
        }
        .text_s {
          font-size: 0.7em;
        }
        .btns {
          display: flex;
          margin-top: 0.2em;
          gap: 0.5em;
          transition: .2s ease-in-out;
        }
        .btns a svg {
          color: #868686;
          fill: #868686;
          transition: color 0.2s, fill 0.2s;
        }
        .btns a:hover svg {
          color: #dfdfdf;
          fill: #dfdfdf;
        }
        .card_content {
          display: flex;
          align-items: center;
          justify-content: center;
          position: absolute;
          bottom: 0.5em;
          left: 0.5em;
        }
      `}</style>
      <div className="flex flex-col items-start justify-start pb-4">
        <div className="main relative">
          <div className="card">
            <a href="#" onClick={openModal}>
              <img src={image} alt="Project" />
            </a>
            <div className="card_content">
              <label className="switch_738">
                <span className="slider_738" />
              </label>
            </div>
          </div>
          <div className="card_back" />
          <div className="data" style={{ alignItems: "center" }}>
            <div className="img">
              {logo ? (
                <img
                  src={logo}
                  alt="Logo"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                />
              ) : null}
            </div>
            <div className="flex flex-row items-center ml-2 w-full justify-between">
              <div className="text">
                <div className="text_m">{text_m}</div>
                <div className="text_s">{text_s}</div>
              </div>
              <div className="btns ml-2">
                <a
                  href={codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center"
                >
                  {/* Code SVG (provided) */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    width="24"
                    height="24"
                    className="size-7"
                  >
                    <path d="M24 12L18.3431 17.6569L16.9289 16.2426L21.1716 12L16.9289 7.75736L18.3431 6.34315L24 12ZM2.82843 12L7.07107 16.2426L5.65685 17.6569L0 12L5.65685 6.34315L7.07107 7.75736L2.82843 12ZM9.78845 21H7.66009L14.2116 3H16.3399L9.78845 21Z" />
                  </svg>
                </a>
                <a
                  href={externalLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center"
                >
                  {/* External Link SVG */}
                  <svg
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14 3h7v7h-2V6.414l-9.293 9.293a1 1 0 01-1.414-1.414L17.586 5H14V3z" />
                    <path d="M5 5h5V3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-5h-2v5H5V5z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" 
          onClick={closeModal}
        >
          <div 
            className="relative w-full max-w-4xl max-h-[90vh] bg-[#111] border border-[#333] rounded-xl shadow-2xl overflow-hidden flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center p-4 border-b border-[#333]">
              <h3 className="text-white font-bold">{text_m}</h3>
              <button 
                className="text-gray-400 hover:text-white transition-colors" 
                onClick={closeModal}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>
            <div className="p-4 overflow-y-auto flex-grow flex flex-col items-center" style={{ scrollbarWidth: 'thin', scrollbarColor: '#333 #111' }}>
              {media && media.length > 0 ? (
                <div className="flex flex-col gap-6 w-full">
                  {media.map((m, i) => {
                    if (m.type === "video") {
                      return <video key={i} src={m.url} controls autoPlay muted className="w-full rounded-lg shadow-lg border border-[#333]" />;
                    }
                    if (m.type === "iframe") {
                      return (
                        <iframe 
                          key={i} 
                          src={m.url} 
                          className="w-full aspect-video rounded-lg shadow-lg border border-[#333]"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                          allowFullScreen 
                        />
                      );
                    }
                    return <img key={i} src={m.url} alt={`${text_m} media ${i + 1}`} className="w-full rounded-lg shadow-lg border border-[#333]" />;
                  })}
                </div>
              ) : (
                <div className="text-gray-500 py-20 text-center flex flex-col items-center">
                  <svg className="w-16 h-16 mb-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                  </svg>
                  <p className="text-lg">Media soon.</p>
                  <p className="text-sm mt-2 opacity-70">Aici poți adăuga imagini sau un video.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectCard;
