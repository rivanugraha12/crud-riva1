import { getAnggota, postAnggota } from "./anggota"

export default function handler(req, res) {
    try {
        const method = req.method
        if (method === 'GET') return getAnggota(req, res)
        if (method === 'POST') return postAnggota(req, res)
    } catch (error) {
        res.status(500).json({ code: 500, status: 'Internal Server Error', message: error.message })
    }
}