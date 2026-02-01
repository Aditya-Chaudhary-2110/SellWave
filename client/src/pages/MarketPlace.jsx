import React, { useState } from "react";
import { ArrowLeftIcon, FilterIcon, Search } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";
import ListingCard from "../components/ListingCard";
import FilterSideBar from "../components/FilterSideBar";

const MarketPlace = () => {
  const [searchParams] = useSearchParams();
  const search = searchParams.get("search");

  const navigate = useNavigate();
  const [showFilterPhone, setShowFilterPhone] = useState(false);
  const [filters, setFilters] = useState({
    platform: null,
    maxPrice: 100000,
    minFollowers: 0,
    niche: null,
    verified: false,
    monetized: false,
  });

  const { listings } = useSelector((state) => state.listing);

  const filteredListings = listings.filter((listing) => {
    if (filters.platform?.length) {
      if (!filters.platform.includes(listing.platform?.toLowerCase().trim()))
        return false;
    }

    if (filters.maxPrice) {
      if (listing.price > filters.maxPrice) return false;
    }

    if (filters.minFollowers) {
      if (listing.followers_count < filters.minFollowers) return false;
    }

    if (filters.niche && listing.niche?.toLowerCase().trim() !== filters.niche)
      return false;

    if (filters.verified && listing.verified !== filters.verified) return false;
    if (filters.monetized && listing.monetized !== filters.monetized)
      return false;

    if (search?.trim()) {
      const trimmed = search.trim().toLowerCase();

      if (
        !listing.title?.toLowerCase().includes(trimmed) &&
        !listing.username?.toLowerCase().includes(trimmed) &&
        !listing.description?.toLowerCase().includes(trimmed) &&
        !listing.platform?.toLowerCase().includes(trimmed) &&
        !listing.niche?.toLowerCase().includes(trimmed)
      ) {
        return false;
      }
    }
    return true;
  });

  return (
    <div className="px-6 md:px-16 lg:px-24 xl:px-32">
      <div className="flex items-center justify-between text-slate-500">
        <button
          onClick={() => {
            navigate("/");
            scrollTo(0, 0);
          }}
          className="flex items-center gap-2 py-5"
        >
          <ArrowLeftIcon className="size-4" />
          Back to Home
        </button>
        <button
          onClick={() => setShowFilterPhone(true)}
          className="flex sm:hidden items-center gap-2 py-5"
        >
          <FilterIcon className="size-4" />
          Filters
        </button>
      </div>

      <div className=" relative flex items-start justify-between gap-8 pb-8">
        <FilterSideBar
          setFilters={setFilters}
          filters={filters}
          setShowFilterPhone={setShowFilterPhone}
          showFilterPhone={showFilterPhone}
        />
        <div className="flex-1 grid xl:grid-cols-2 gap-4">
          {filteredListings
            .sort((a, b) => (a.featured ? -1 : b.featured ? 1 : 0))
            .map((listing, index) => (
              <ListingCard listing={listing} key={index} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default MarketPlace;
