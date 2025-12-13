const BrazilFlag = ({ size = 20 }: { size?: number }) => {
  return (
    <svg
      width={size}
      height={size * 0.7}
      viewBox="0 0 100 70"
      className="rounded-sm overflow-hidden"
    >
      {/* Green background */}
      <rect width="100" height="70" fill="#009739" />
      {/* Yellow diamond */}
      <polygon points="50,5 95,35 50,65 5,35" fill="#FEDD00" />
      {/* Blue circle */}
      <circle cx="50" cy="35" r="18" fill="#002776" />
      {/* White arc (simplified representation of the band) */}
      <path
        d="M 35 38 Q 50 30, 65 38"
        fill="none"
        stroke="white"
        strokeWidth="3"
      />
    </svg>
  );
};

export default BrazilFlag;
