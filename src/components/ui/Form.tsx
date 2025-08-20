export type FormProps = React.FormHTMLAttributes<HTMLFormElement>;

export const Form = ({ className, children, ...rest }: FormProps) => {
  return (
    <form
      className={`h-fit flex flex-col gap-8 bg-white p-6 shadow-low rounded-lg ${className}`}
      {...rest}
    >
      {children}
    </form>
  );
};
