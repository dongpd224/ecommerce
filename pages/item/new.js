import Layout from "../../components/Layout"
import axios from 'axios'
import { useRouter } from "next/router";
import { useState } from "react"

const DEFAULT_DATA = {
    name: "",
    discount_price: "",
    img_link: "",
    priority: "1",
    timeToFinish: 60,
}
function NewItem() {
    const [form, setForm] = useState(DEFAULT_DATA);

    const resetForm = () => setForm(DEFAULT_DATA)

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value
        })
    }

    const submitForm = () => {
        onFormSubmit(form);
    }
    return (
        <Layout>
            <div className="container">
                <h1 className="title text-center">Add New Item</h1>

                <div className="field mt-4">
                    <label className="label">Name</label>
                    <div className="control">
                        <input
                            className="input"
                            value={form.name}
                            onChange={handleChange}
                            name="name"
                            type="text"
                            placeholder="Learn Nextjs and Sanity IO" />
                    </div>
                </div>
                <div className="field">
                    <label className="label">Discount Price</label>
                    <div className="control">
                        <input className="input"
                            value={form.discount_price}
                            onChange={handleChange}
                            name="discount_price"
                            type="number"
                            placeholder="0">
                        </input>
                    </div>
                </div>

                <div className="field mt-4">
                    <label className="label">Image link</label>
                    <div className="control">
                        <input
                            className="input"
                            onChange={handleChange}
                            name="img_link"
                            value={form.img_link}
                            type="text"
                            placeholder="Nextjs.com" />
                    </div>
                </div>

                <div className="field">
                    <label className="label">Piority</label>
                    <div className="control">
                        <div className="select">
                            <select
                                value={form.priority}
                                onChange={handleChange}
                                name="priority"
                            >
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className="field mt-4">
                    <label className="label">Time to finish</label>
                    <div className="control">
                        <input className="input"
                            value={form.timeToFinish}
                            onChange={handleChange}
                            name="timeToFinish"
                            type="number"
                            placeholder="60" />
                    </div>
                    <p className="help">Time is in minutes</p>
                </div>

                <div className="field is-grouped mt-4">
                    <div className="control">
                        <button
                            type="submit"
                            className="button is-link"
                            onClick={submitForm}
                        >Submit</button>
                    </div>
                    <div className="control">
                        <button
                            className="button is-link is-light"
                            onClick={resetForm}
                        >Reset</button>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
export default NewItem