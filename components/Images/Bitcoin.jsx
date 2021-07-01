export const Bitcoin = props => {
  const orange = '#EDBC41';
  return (
    <svg
      width={451}
      height={594}
      viewBox="0 0 451 594"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g opacity={0.15} clipPath="url(#prefix__clip0)">
        <path
          d="M.293 59.91c261.94 1.172 414.99-21.35 414.99 111.363 0 128.292-129.078 119.97-297.057 119.97C347.121 289.542 447 307.197 447 416.554 448.182 540.968 341.756 535.206.293 533.474M117.911-.022v594.231M117.911 84.606H.293"
          // stroke="#A2A3C3"
          stroke={orange}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M142.473 594.135v.5h1v-.5h-1zm1-594.18a.5.5 0 00-1 0h1zm0 594.18V-.045h-1v594.18h1z"
          fill={orange}
        />
        <path
          d="M117.911 508.96H.293"
          // stroke="#A2A3C3"
          stroke={orange}
          strokeLinecap="round"
          strokeLinejoin="round"
          // fill="white"
        />
      </g>
      <defs>
        <clipPath id="prefix__clip0">
          <path fill="#fff" d="M0 0h451v594H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
