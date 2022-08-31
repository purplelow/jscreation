import Children from "interface/children";

export default function Container({ children }: Children) {
  return (
    <div className="flex h-full w-full items-center justify-center bg-black p-4 md:bg-white ">
      {children}
    </div>
  );
}
