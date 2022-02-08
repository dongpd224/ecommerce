import Layout from "../../components/Layout"
import axios from 'axios'
import { useRouter } from "next/router";
import { useState } from "react"

const DEFAULT_DATA = {
    item_name: "",
    item_brand: "",
    discount_price: 0,
    img_link: "",
    stars: 5,
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
        axios.post("../api/items", form)
            .then(_ => alert(response.data))
            .catch(err => alert(err?.response?.data));
    }
    return (
        <Layout>
            <div className="container mt-4">
                <h1 className="title text-center">Add New Item</h1>
                <div className="row d-flex justify-content-center">
                    <div className="col-lg-6">
                        <div className="mt-4">
                            <label className="label">Name</label>
                            <div className="control">
                                <input
                                    className="form-control form-control-lg"
                                    value={form.item_name}
                                    onChange={handleChange}
                                    name="item_name"
                                    type="text"
                                    placeholder="Item name" />
                            </div>
                        </div>
                        <div className="mt-4">
                            <label className="label">Brand</label>
                            <div className="control">
                                <input
                                    className="form-control form-control-lg"
                                    value={form.item_brand}
                                    onChange={handleChange}
                                    name="item_brand"
                                    type="text"
                                    placeholder="Type brand" />
                            </div>
                        </div>
                        <div className="mt-4">
                            <label className="label">Discount Price</label>
                            <div className="control">
                                <input className="form-control form-control-lg"
                                    value={form.discount_price}
                                    onChange={handleChange}
                                    name="discount_price"
                                    type="number"
                                    placeholder="0">
                                </input>
                            </div>
                        </div>
                        <div className="mt-4">
                            <label className="label">Star</label>
                            <div className="control">
                                <input className="form-control form-control-lg"
                                    value={form.stars}
                                    onChange={handleChange}
                                    name="stars"
                                    type="number"
                                    placeholder="0">
                                </input>
                            </div>
                        </div>

                        <div className="mt-4">
                            <label className="label">Image link</label>
                            <div className="control">
                                <input
                                    className="form-control form-control-lg"
                                    onChange={handleChange}
                                    name="img_link"
                                    value={form.img_link}
                                    type="text"
                                    placeholder="Nextjs.com" />
                            </div>
                        </div>
                        <div className="mt-4 mb-4 d-flex justify-content-start">
                            <div className="control me-3">
                                <button
                                    type="submit"
                                    className="btn btn-primary btn-lg"
                                    onClick={submitForm}
                                >Submit</button>
                            </div>
                            <div className="control">
                                <button
                                    className="btn btn-outline-secondary btn-lg"
                                    onClick={resetForm}
                                >Reset</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </Layout>
    )
}
export default NewItem