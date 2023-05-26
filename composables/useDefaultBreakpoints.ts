export default function () {
  const breakpointsValues = {
    sm: 579,
    md: 768,
    lg: 1024,
    xl: 1440,
    xxl: 1920
  };
  const breakpoints = useBreakpoints(breakpointsValues);

  const smAndUp = breakpoints.greaterOrEqual('sm');
  const smAndDown = breakpoints.smallerOrEqual('sm');
  const sm = breakpoints.between('sm', 'md');
  const mdAndUp = breakpoints.greaterOrEqual('md');
  const mdAndDown = breakpoints.smallerOrEqual('md');
  const md = breakpoints.between('md', 'lg');
  const lgAndUp = breakpoints.greaterOrEqual('lg');
  const lgAndDown = breakpoints.smallerOrEqual('lg');
  const lg = breakpoints.between('lg', 'xl');
  const xlAndUp = breakpoints.greaterOrEqual('xl');
  const xlAndDown = breakpoints.smallerOrEqual('xl');
  const xl = breakpoints.between('xl', 'xxl');
  const xxlAndUp = breakpoints.greaterOrEqual('xxl');
  const xxlAndDown = breakpoints.smallerOrEqual('xxl');

  return {
    smAndUp,
    smAndDown,
    sm,
    mdAndUp,
    mdAndDown,
    md,
    lgAndUp,
    lgAndDown,
    lg,
    xlAndUp,
    xlAndDown,
    xl,
    xxlAndUp,
    xxlAndDown,
    breakpointsValues
  };
}
