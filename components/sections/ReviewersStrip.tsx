import Image from "next/image";
import Marquee from "@/components/ui/Marquee";
import { reviewers } from "@/data/testimonials";

export default function ReviewersStrip() {
  return (
    <div className="border-y border-line bg-white py-8">
      <Marquee>
        {reviewers.map((reviewer) => (
          <div
            key={reviewer.name}
            className="flex items-center gap-3 rounded-full border border-line bg-paper py-2 pl-2 pr-5"
          >
            <Image
              src={reviewer.image}
              alt={reviewer.name}
              width={40}
              height={40}
              className="h-9 w-9 rounded-full object-cover"
            />
            <div>
              <p className="text-sm font-semibold text-ink">{reviewer.name}</p>
              <p className="flex items-center gap-1 text-xs text-muted">
                <span className="text-lime">★</span>
                {reviewer.rating}
              </p>
            </div>
          </div>
        ))}
      </Marquee>
    </div>
  );
}
