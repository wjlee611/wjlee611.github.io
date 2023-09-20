import clsWrapper from "@/utils/class-wrapper";

export default function IconButton({
  className,
  type = "button",
  ...props
}: React.ComponentProps<"button">) {
  return (
    <button
      aria-label="icon-button"
      {...props}
      type={type}
      className={clsWrapper(
        "flex h-9 w-9 items-center justify-center rounded-lg transition-all",
        "text-secondary hover:bg-secondary",
        className ?? ""
      )}
    />
  );
}
