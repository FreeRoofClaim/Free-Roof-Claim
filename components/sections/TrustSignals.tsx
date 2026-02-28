import { Star } from "lucide-react";
import Image from "next/image";
import { reviews } from "@/data/sectionsData";

export default function TrustSignals () {

  return (
    <section className="bg-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#122E5F]/90 border-2 border-[#122E5F] rounded-xl p-4 text-center max-w-2xl mx-auto mb-8">
          <p className="text-sm font-semibold text-white">
            💰 100% Free – We get paid by roofers, not you!
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-bold text-gray-900 text-center mb-4">
            What Our Customers Say
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {reviews.map((review, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-start space-x-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-2xl flex-shrink-0">
                    <Image src={review.photo} alt={review.name} className="rounded-full w-full h-full object-cover" width={48} height={48} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <p className="font-semibold text-gray-900 text-sm">
                          {review.name}
                        </p>
                        <p className="text-xs text-gray-500">{review.location}</p>
                      </div>
                      <div className="flex items-center space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="h-4 w-4 fill-yellow-400 text-yellow-400"
                          />
                        ))}
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 italic leading-relaxed">
                      {review.review}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
