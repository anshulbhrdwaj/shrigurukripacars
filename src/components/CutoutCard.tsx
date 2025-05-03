export default function CutoutCard() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1280 720"
      width="100%"
      height="100%"
      preserveAspectRatio="xMidYMid meet"
      className="
        w-[90vw]
        xl:w-[95vw]
        h-[60vh]
        rounded-[2rem]
        md:rounded-[4rem]
        overflow-hidden
      "
    >
      {/* Group to apply the responsive styles */}
      {/* <g transform="scale(1)"> */}
        <path
          d="
            M80,0
            H1200
            Q1280,0 1280,80
            V460
            Q1280,510 1250,540
            Q1220,570 1170,570
            H860
            Q820,570 800,590
            Q780,610 780,640
            V660
            Q780,690 755,705
            Q730,720 700,720
            H80
            Q0,720 0,640
            V80
            Q0,0 80,0
            Z
          "
          fill="var(--foreground)"
        />
      {/* </g> */}
    </svg>
  );
}
