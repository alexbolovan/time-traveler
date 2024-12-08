import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import {Inertia} from "@inertiajs/inertia";


export default function Create() {

    return (
        <>
            <AuthenticatedLayout>
                <form onSubmit={(e) => {
                    // do something...
                    const form_data = new FormData(e.target);

                    Inertia.post('/predictions/submit', form_data)
                    console.log(form_data);
                    e.preventDefault()

                }}>
                    <div className="flex flex-col">
                        <label>Title</label>
                        <input className="text-black" name="Title"/>

                        <label>Body</label>
                        <input className="text-black" name="Body"/>

                        <label>Reveal at</label>
                        <input className="text-black" type="datetime-local" name="reveal_at"/>

                        <button className="border border-white">Post</button>
                    </div>
                </form>

            </AuthenticatedLayout>
        </>
    );
}
