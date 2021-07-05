import { animated, useSpring, config } from 'react-spring';

export const Bitcoin = props => {
  const { x } = useSpring({
    reset: true,
    from: { x: 0 },
    x: 100,
    delay: 1000,
    config: config.molasses,
  });

  const orange = '#EDBC41';
  return (
    <animated.svg
      width="451"
      height="594"
      viewBox="0 0 451 594"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0)">
        <g opacity="0.2">
          <path
            d="M0.293457 59.9091C262.233 61.0815 415.283 38.5604 415.283 171.273C415.283 299.565 286.205 291.243 118.226 291.243C347.121 289.542 447 307.197 447 416.554C448.182 540.968 341.756 535.206 0.293457 533.474"
            stroke={orange}
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          <path
            id="path_2"
            d="M117.911 -0.0221252V594.209"
            stroke={orange}
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          <path
            d="M117.911 84.6065H0.293457"
            stroke={orange}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M142.473 594.135V594.635H143.473V594.135H142.473ZM143.473 -0.045105C143.473 -0.321247 143.249 -0.545105 142.973 -0.545105C142.697 -0.545105 142.473 -0.321247 142.473 -0.045105H143.473ZM143.473 594.135V-0.045105H142.473V594.135H143.473Z"
            fill={orange}
          />
          <path
            d="M117.911 508.96H0.293457"
            stroke={orange}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </g>
      <defs>
        <clipPath id="clip0">
          <rect width="451" height="594" fill="white" />
        </clipPath>
      </defs>
    </animated.svg>
  );
};
