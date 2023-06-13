const dots = 'mx-[1px] inline-block h-1 w-1 animate-blink rounded-md';

const LoadingDots = ({ className }) => {
  return (
    <span className="mx-2 inline-flex items-center">
      <span className={`${dots} ${className}`} />
      <span className={`${dots} animation-delay-[200ms] ${className}`} />
      <span className={`${dots} animation-delay-[400ms] ${className}`} />
    </span>
  );
};

export default LoadingDots;