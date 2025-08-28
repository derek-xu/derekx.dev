//import { ArrowUpIcon } from "@radix-ui/react-icons";

export default function Footer() {
  return (
    <footer className="flex font-mono text-xs w-full py-3.5 text-gray-600 border-t border-gray-200 bg-gray-100 md:px-0 px-6">
      <div className="w-full flex justify-between items-center max-w-xl mx-auto">
        {/* <span className="inline-flex items-center gap-1">
          © {new Date().getFullYear()} DEREK XU{" "}
          <a href="#top" className="animate-bounce">
            <ArrowUpIcon height={12} width={12} />
          </a>
        </span> */}

        <p>
          MADE BY{" "}
          <a
            href="https://derekx.dev"
            target="_blank"
            rel="noreferrer"
            className="underline"
          >
            DEREK
          </a>
        </p>
      </div>
    </footer>
  );
}
