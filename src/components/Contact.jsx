import { CONTACT } from "../constants"

const Contact = () => {
    return (
        <div className="border-b border-neutral-900 pb-20">
            <h1 className="my-10 text-center text-4xl">Contact</h1>
            <div className="text-center tracking-tighter">
                <p className="my-4">{CONTACT.alamat}</p>
                <p className="my-4">{CONTACT.telp}</p>
                <a href="#">{CONTACT.email}</a>
            </div>
        </div>
    )
}

export default Contact