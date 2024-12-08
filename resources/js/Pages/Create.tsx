import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import {Inertia} from "@inertiajs/inertia";


export default function Create() {

    return (
        <>
            <AuthenticatedLayout>
                <form onSubmit={(e) => {
                    // do something...
                    const form_data = new FormData(e.target);


                    // chatgpt code just to ensure timezone is configured correctly against faker data
                    // Convert the `reveal_date` value to your custom UTC format
                    const localDatetime = form_data.get('reveal_date'); // Get the local datetime value
                    if (localDatetime) {
                        const utcDatetime = new Date(localDatetime);
                        // Format to 'YYYY-MM-DD HH:mm:ss'
                        const formattedDatetime = `${utcDatetime.getUTCFullYear()}-${String(
                            utcDatetime.getUTCMonth() + 1
                        ).padStart(2, '0')}-${String(utcDatetime.getUTCDate()).padStart(2, '0')} ${String(
                            utcDatetime.getUTCHours()
                        ).padStart(2, '0')}:${String(utcDatetime.getUTCMinutes()).padStart(2, '0')}:${String(
                            utcDatetime.getUTCSeconds()
                        ).padStart(2, '0')}`;
                        form_data.set('reveal_date', formattedDatetime); // Replace the value in the FormData object
                    }
                    Inertia.post('/predictions/submit', form_data)
                    console.log(form_data);
                    e.preventDefault()

                }}>
                    <div className="flex flex-col">
                        <label>Title</label>
                        <input className="text-black" name="title"/>

                        <label>Body</label>
                        <input className="text-black" name="body"/>

                        <label>Reveal at</label>
                        <input className="text-black" type="datetime-local" name="reveal_date"/>

                        <button className="border border-white">Post</button>
                    </div>
                </form>

            </AuthenticatedLayout>
        </>
    );
}
