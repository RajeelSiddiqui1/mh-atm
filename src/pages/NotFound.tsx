import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-[70vh] items-center justify-center bg-slate-50 mt-[105px] px-4">
      <div className="glass-panel p-10 rounded-3xl border border-slate-200 shadow-xl text-center max-w-md w-full space-y-4">
        <span className="text-5xl font-black font-heading text-emerald-600">404</span>
        <h1 className="text-2xl font-black font-heading text-slate-900">Page Not Found</h1>
        <p className="text-sm text-slate-600">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <Button asChild className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold w-full rounded-xl">
          <Link to="/" className="flex items-center justify-center gap-2">
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Home</span>
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;

