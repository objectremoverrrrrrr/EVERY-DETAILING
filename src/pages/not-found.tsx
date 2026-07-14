import { Link } from "wouter";
import { Shield } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] w-full flex items-center justify-center bg-white text-primary px-6 text-center">
      <div className="max-w-md mx-auto">
        <div className="flex justify-center mb-6">
          <Shield className="w-12 h-12 text-gray-300" />
        </div>
        <h1 className="text-4xl font-bold tracking-tight mb-4 text-primary">404</h1>
        <p className="text-lg text-muted-foreground mb-8">
          The page you're looking for doesn't exist. It might have been moved or removed.
        </p>
        <Link 
          href="/"
          className="bg-primary text-white px-8 py-3 text-sm font-semibold uppercase tracking-widest hover:bg-gray-800 transition-colors inline-block"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}

