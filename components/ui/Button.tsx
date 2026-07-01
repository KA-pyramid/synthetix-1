import type { ButtonHTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";

export const buttonVariants = cva("", {
  variants: {
    variant: {
      primary: "",
      secondary: "",
      ghost: "",
    },
    size: {
      sm: "",
      md: "",
      lg: "",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export function Button({ children, variant, size, ...props }: ButtonProps) {
  return (
    <button
      className="border border-dashed border-neutral-500 p-2 font-mono text-xs text-neutral-500"
      {...props}
    >
      Button — awaiting 21st.dev component
      {children}
    </button>
  );
}
