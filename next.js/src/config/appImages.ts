interface FeatureImage {
  src: string;
  alt: string;
}

interface FeatureImages {
  visualTimeline: FeatureImage[];
  medicalTracking: FeatureImage[];
  breederConnect: FeatureImage[];
  smartRecords: FeatureImage[];
}

export const featureImages: FeatureImages = {
  visualTimeline: [
    {
      src: "https://ik.imagekit.io/0s9lwb2yr/Pawgress/features/timeline_1.webp",
      alt: "Visual Timeline Feature Screenshot"
    }
  ],
  medicalTracking: [
    {
      src: "https://ik.imagekit.io/0s9lwb2yr/Pawgress/features/medical_1.webp",
      alt: "Medical Tracking Feature Screenshot"
    }
  ],
  breederConnect: [
    {
      src: "https://ik.imagekit.io/0s9lwb2yr/Pawgress/features/breeder_1.webp",
      alt: "Breeder Connect Feature Screenshot"
    }
  ],
  smartRecords: [
    {
      src: "https://ik.imagekit.io/0s9lwb2yr/Pawgress/features/smart_1.webp",
      alt: "Smart Records Feature Screenshot"
    }
  ]
};
