import type { Metadata } from "next";
import { RequestSuccess } from "@/components/sections/RequestSuccess";

export const metadata: Metadata = {
  title: "Request Received",
  description:
    "Your demo request has been received. Track it with your reference number and see what happens next.",
};

export default function RequestSuccessPage() {
  return <RequestSuccess />;
}
