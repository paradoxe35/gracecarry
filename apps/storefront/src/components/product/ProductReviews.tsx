import { random } from "lodash";
import { useTranslations } from "next-intl";

export default function ProductReviews() {
    const t = useTranslations("ProductPage");
    const reviews = {
        average: random(0, 5, true), // Random average rating between 0 and 5
        count: random(1, 100) // Random count of reviews between 1 and 100
    }
  return (
    <div className="flex items-center mb-6">
      <div className="flex">
        {[1, 2, 3, 4, 5].map((star) => (
          <svg
            key={star}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill={
              star <= Math.round(reviews.average)
                ? "currentColor"
                : "none"
            }
            stroke="currentColor"
            className={`w-5 h-5 ${
              star <= Math.round(reviews.average)
                ? "text-yellow-400"
                : "text-neutral-300"
            }`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={
                star <= Math.round(reviews.average) ? 0 : 1.5
              }
              d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
            />
          </svg>
        ))}
      </div>
      <span className="ml-2 text-neutral-600">
        {Math.round(reviews.average*100)/100}{" "}
        {t("reviews.count", { count: reviews.count })}
      </span>
    </div>
  );
}
