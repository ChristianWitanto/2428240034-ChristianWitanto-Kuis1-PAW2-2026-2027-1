import z from "zod";

export const storeSmartphoneSchema = z.object({
    merk_hp : z.string().trim().max(50, "Merk HP wajib 50 karkter"),
    kapasitas_gb : z.number().positive("Kapasitas harus berupa angka positif"),
    harga : z.number().positive("Harga harus berupa angka positif")
});
export const updateSmartphoneSchema = z.object({
    merk_hp : z.string().trim().max(50, "Merk HP wajib 50 karkter"),
    kapasitas_gb : z.number().positive("Kapasitas harus berupa angka positif"),
    harga : z.number().positive("Harga harus berupa angka positif")
})