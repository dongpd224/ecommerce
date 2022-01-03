import Layout from "../../components/Layout"
import axios from 'axios'
import { useRouter } from "next/router";
import { useState } from "react"

const DEFAULT_DATA = {
    item_name: "",
    discount_price: 0,
    img_link: "",
    star: 5,
}

function NewItem() {
    const router = useRouter()
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
            axios.post("http://localhost:3000/api/items", form)
                 .then(_ => alert(response.data))
                .catch(err => alert(err?.response?.data));
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
                            value={form.item_name}
                            onChange={handleChange}
                            name="item_name"
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
                <div className="field">
                    <label className="label">Star</label>
                    <div className="control">
                        <input className="input"
                            value={form.star}
                            onChange={handleChange}
                            name="star"
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