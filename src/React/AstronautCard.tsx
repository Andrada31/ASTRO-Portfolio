const AstronautCard = () => (
  <div className="w-[15em] h-[15em] p-4 pr-8 rounded-2xl overflow-hidden z-[1] gap-4">
    <img
      src="/astronaut.png"
      alt="Astronaut"
      className="w-[12em] mr-4 z-[5] transition-transform duration-300 hover:cursor-grab active:cursor-grabbing"
      style={{ animation: "move 10s ease-in-out infinite" }}
    />
  </div>
);

export default AstronautCard;
