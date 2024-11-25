import TextInput from "@/Components/TextInput";

export default function NavBar() {
    return (
        <>
            <div className="flex flex-row justify-center items-center space-x-8">
                <p className="pl-2">Logo</p>
                <TextInput className="flex-none hidden sm:block"/>
                <p className="pr-2">Auth</p>
            </div>


        </>
    )
}
