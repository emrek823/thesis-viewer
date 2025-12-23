import { OutboundVoter } from "@/components/OutboundVoter";

export default function OutboundPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <div className="mb-8">
        <h1 className="pixel-header text-xl mb-4 text-gray-800">
          OUTBOUND SOURCING
        </h1>
        <p className="text-gray-600 max-w-2xl">
          Review thesis-driven outreach candidates. Vote to help tune future searches.
        </p>
      </div>

      <OutboundVoter />
    </div>
  );
}
