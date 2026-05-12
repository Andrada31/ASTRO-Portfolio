interface ProjectCardProps {
  text_m: string;
  text_s: string;
  image: string;
  logo?: string;
  codeLink: string;
  externalLink: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  text_m,
  text_s,
  image,
  logo,
  codeLink,
  externalLink,
}) => {
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
            <a href={externalLink} target="_blank" rel="noopener noreferrer">
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
    </>
  );
};

export default ProjectCard;
