import moongoose from 'mongoose'

const SmartphoneSchema = new moongoose.Schema({
    name :{
        merk_hp : String,
        kapasitas_gb : Number,
        harga : Number
    }
},{
    timestamps : true
})

const SmartphoneModel = moongoose.model('Smartphone',SmartphoneSchema)
export default SmartphoneModel