import SmartphoneModel from "../model/smartphone.model.js";
import { apiResponse,apiResponseValidation } from "../utils/response.js";
import { storeSmartphoneSchema,updateSmartphoneSchema } from "../schemas/smartphone.schema.js";
class SmartphoneController {
    static async index(req,res) {
        const listSmartphone = await SmartphoneModel.find()

        return apiResponse({
            res,
            status : 200,
            message : "List Smartphone",
            data : listSmartphone
        })
    }
    static async show(req,res) {
        const smartphoneId = req.params.id;

        const smartphone = await SmartphoneModel.findById(smartphoneId)
        return apiResponse({
            res,
            status : 200,
            message : "Detail Smartphone",
            data : smartphone
        })
    }
    static async store(req,res){
        const result = storeSmartphoneSchema.safeParse(req.body);
        if(!result.success) {
            return apiResponseValidation({
                res,
                errors: result.error
            })
        }
        const{ merk_hp, kapasitas_gb, harga} = result.data;

        const smartphone = await SmartphoneModel.create({
            merk_hp : merk_hp,
            kapasitas_gb : kapasitas_gb,
            harga : harga
        })
        return apiResponse({
            res,
            status : 200,
            message : "Smartphone berhasil di buat",
            data : smartphone 
        })
    }
    static async update(req, res) {
        const smartphoneId = req.params.id
        const result = updateSmartphoneSchema.safeParse(req.body);
        if(!result.success) {
            return apiResponseValidation({
                res,
                errors: result.error
            })
        }
        const{merk_hp, kapasitas_gb, harga} = result.data;
   
        const exists = await SmartphoneModel.exists({ _id: smartphoneId })
        if (!exists) {
            return apiResponse({ res, status: 404, message: 'Smartphone tidak ditemukan' })
    }
        const updateSmartphone = await SmartphoneModel.findOneAndUpdate(
            { _id: smartphoneId },
            { merk_hp, kapasitas_gb, harga },
            { new: true }
    )
        return apiResponse({ res, status: 200, data: updateSmartphone })
  }
    static async delete(req, res) {
        const smartphoneId = req.params.id
        const exists = await SmartphoneModel.exists({ _id: smartphoneId })
        if (!exists) {
            return apiResponse({ res, status: 404, message: 'Smartphone tidak ditemukan' })
    }
        await SmartphoneModel.findOneAndDelete({ _id: smartphoneId })
            return apiResponse({ res, status: 200, message: 'Smartphone berhasil dihapus', data: null })
  }

}

export default SmartphoneController