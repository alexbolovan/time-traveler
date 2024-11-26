import TextInput from "@/Components/TextInput";

export default function NavBar() {
    return (
        <>
            <div className="flex flex-row items-center justify-between w-full">
                {/* Placeholder for left alignment */}
                <div className="flex-1"></div>

                {/* Center Input */}
                <div className="flex-none">
                    <TextInput className="hidden sm:block"/>
                </div>

                {/* Auth Section on the Right */}
                <div className="flex-1 flex justify-end mr-4">
                    <p>Auth</p>
                </div>
            </div>

        </>
    )
}
