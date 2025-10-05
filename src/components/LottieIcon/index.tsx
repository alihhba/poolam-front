// src/components/LottieIcon.tsx
import Lottie from "react-lottie"; // Import the Lottie component
import animationData from "@/assets/animate-logo.json"; // Import your Lottie animation JSON

const LottieIcon = () => {
    const defaultOptions = {
        loop: true,  // Set to true if you want the animation to loop
        autoplay: true, // Autoplay the animation
        animationData: animationData, // Your Lottie animation JSON
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice", // Optional: controls aspect ratio scaling
        },
    };

    return (
        <div className="lottie-container">
            <Lottie options={defaultOptions} height={150} width={150} />
        </div>
    );
};

export default LottieIcon;
