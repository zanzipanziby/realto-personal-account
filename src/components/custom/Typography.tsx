import * as React from "react";
import { cn } from "@/lib/utils";
import { JSX } from "react";

type VariantType = "h1" | "h2" | "h3" | "h4" | "p1" | "p2" | "lead" | "muted";

const variants: Record<VariantType, string> = {
  h1: "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
  h2: "scroll-m-20 text-3xl font-semibold tracking-tight",
  h3: "scroll-m-20 text-2xl font-semibold tracking-tight",
  h4: "scroll-m-20 text-xl font-semibold tracking-tight",
  p1: "leading-7 [&:not(:first-child)]:mt-6",
  p2: "text-sm leading-6 [&:not(:first-child)]:mt-4",
  lead: "text-xl text-muted-foreground",
  muted: "text-sm text-muted-foreground",
};

const defaultElementMap: Record<VariantType, keyof JSX.IntrinsicElements> = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  p1: "p",
  p2: "p",
  lead: "p",
  muted: "p",
};

type AsProp<C extends React.ElementType> = {
  as?: C;
};

type BaseProps = {
  variant: VariantType;
  className?: string;
};

type PolymorphicComponentProp<
  C extends React.ElementType,
  Props = object,
> = React.PropsWithChildren<Props & AsProp<C>> &
  Omit<React.ComponentPropsWithoutRef<C>, keyof (AsProp<C> & Props)>;

export type TypographyProps<C extends React.ElementType> =
  PolymorphicComponentProp<C, BaseProps>;

export const Typography = <C extends React.ElementType = "p">({
  as,
  variant,
  className,
  children,
  ...props
}: TypographyProps<C>) => {
  const Component = (as || defaultElementMap[variant]) as React.ElementType;

  return (
    <Component className={cn(variants[variant], className)} {...props}>
      {children}
    </Component>
  );
};

Typography.displayName = "Typography";
