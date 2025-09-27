import Image from "next/image" // Import the Image component

export function DashboardPreview() {
  return (
    <div className="w-[calc(100vw-32px)] md:w-[1160px]">
      <div className="bg-primary-light/50 rounded-2xl p-2 shadow-2xl">
        <Image
          src="/images/hiresevak-dashboard.svg"
          alt="HireSevak operations dashboard preview"
          width={1160}
          height={720}
          className="w-full h-full object-cover rounded-xl shadow-lg"
        />
      </div>
    </div>
  )
}
