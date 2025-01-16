import { Suspense, lazy, FC } from "react";
type LazyComponentImport = () => Promise<{ default: FC<any> }>;

const lazyLoad = (component: LazyComponentImport) => lazy(component) as never as JSX.Element;
const wrapWith = (
  Component: () => JSX.Element,
  Wrapper: () => JSX.Element,
  wrapperProps: any
) => {
  return (props?: any): JSX.Element => (
    <Wrapper {...wrapperProps}>
      <Component {...props} />
    </Wrapper>
  );
};
export const lazyComponent = (importComponent: any) => {
  const LazyComponent = lazyLoad(importComponent);
  // @ts-ignore TODO: Fix Suspense type error
  return wrapWith(LazyComponent, Suspense, { fallback: null})
};
