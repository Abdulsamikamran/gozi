import React from "react";
import { Star, MapPin } from "lucide-react";

const CaretakerCard = ({ caretaker }) => {
  return (
    <div className="flex items-center justify-between p-4 bg-white rounded-xl border border-gray-200 hover:shadow-md transition-shadow cursor-pointer">
      <div className="flex items-center gap-4">
        <img
          src={caretaker.image}
          alt={caretaker.name}
          className="w-16 h-16 rounded-[18px] object-cover"
        />
        <div>
          <h3 className="font-semibold text-gray-900 text-lg">
            {caretaker.name}
          </h3>

          <div className="flex items-center gap-1">
            <Star size={16} className="text-amber-400 fill-amber-400" />
            <span className="text-sm text-gray-600">{caretaker.rating}</span>
          </div>
          <div className="flex items-center gap-1 text-sm text-gray-500">
            <MapPin size={14} />
            <span>{caretaker.address}</span>
          </div>
        </div>
      </div>
      <div className="text-right">
        <div className="text-2xl font-bold text-gray-900">
          ${caretaker.price}
          <span className="text-base text-gray-500">/h</span>
        </div>
      </div>
    </div>
  );
};

export default CaretakerCard;
