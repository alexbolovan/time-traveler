import { PageProps } from '@/types';
import { Head, Link } from '@inertiajs/react';
import PrimaryButton from "@/Components/PrimaryButton";
export default function Home({ auth }: PageProps<{ auth: any }>) {
    return (
        <>
            <div className="max-w-7xl mx-auto flex flex-col items-center justify-center min-h-screen text-white">
                <h1 className="text-8xl font-bold mb-4 tracking-wide text-center">
                    Time Traveller
                </h1>
                <p className="text-center text-3xl text-gray-400 mb-8">
                    Predict Boldly, Reveal Bravely 🔮
                </p>
                <a href="predictions" className="py-3 bg-white hover:bg-black text-black hover:text-white font-medium text-2xl rounded-lg transition-colors duration-300 shadow-lg">
                    Travel
                </a>
            </div>
        </>

    );
}
