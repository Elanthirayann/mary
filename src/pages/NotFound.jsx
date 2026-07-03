import { Link } from "react-router-dom";
import Button from "../components/common/Button";

export default function NotFound() {
  return (
    <section className="py-24 px-6 text-center max-w-lg mx-auto">
      <p className="font-heading text-gold-dark font-bold text-6xl mb-4">404</p>
      <h1 className="font-heading font-bold text-2xl text-maroon-dark mb-3">Page not found</h1>
      <p className="text-gray-600 mb-8">
        The page you're looking for doesn't exist or has moved.
      </p>
      <Button as={Link} to="/" variant="maroon">Back to Home</Button>
    </section>
  );
}
