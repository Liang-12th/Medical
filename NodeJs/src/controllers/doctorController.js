import doctorServices from '../services/doctorServices';

let getTopDoctorHome =async(req,res) =>{
    let limit = req.query.limit;
    if(!limit) limit = 10;
    try {
        let respornse = await doctorServices.getTopDoctorHome(+limit);
        return res.status(200).json(
            respornse
        )
    } catch (error) {
        console.log(error);
        return res.status(200).json ({
            errCode: -1,
            errMessage: 'Error from server',
        })
    }
}

module.exports = {
    getTopDoctorHome :getTopDoctorHome,    
}
