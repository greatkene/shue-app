import { AddressOption, OfferingOption } from "./types";
import { signUpScreenStrings } from "./strings";

const { offerings } = signUpScreenStrings.information;

/* Per-offering accent colours, mirroring the design's categorical palette. */
const OFFERING_ACCENT = {
  amber: "#F97316",
  purple: "#8B5CF6",
} as const;

export const SELLER_OFFERINGS: ReadonlyArray<OfferingOption> = [
  { value: "reseller", label: offerings.reseller },
  {
    value: "custom-artist",
    label: offerings.customArtist,
    color: OFFERING_ACCENT.amber,
  },
  {
    value: "shoe-cleaning",
    label: offerings.shoeCleaning,
    color: OFFERING_ACCENT.purple,
  },
  {
    value: "foot-health",
    label: offerings.footHealth,
    color: OFFERING_ACCENT.amber,
  },
  { value: "shoe-restoration", label: offerings.shoeRestoration },
  { value: "store", label: offerings.store },
];

/* Placeholder address results — swap for a geocoding/search API response. */
export const MOCK_ADDRESSES: ReadonlyArray<AddressOption> = [
  {
    id: "bay-area-1",
    title: "Bay Area",
    address: "Bay Area, St Jorn Street, California,12365",
    distance: "32 KM",
  },
  {
    id: "bay-area-2",
    title: "Bay Area",
    address: "Bay Area, St Jorn Street, California,12365",
    distance: "32 KM",
  },
  {
    id: "bay-area-3",
    title: "Bay Area",
    address: "Bay Area, St Jorn Street, California,12365",
    distance: "32 KM",
  },
  {
    id: "bay-area-4",
    title: "Bay Area",
    address: "Bay Area, St Jorn Street, California,12365",
    distance: "32 KM",
  },
];
