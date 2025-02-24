import Model from "../models/Model.js";
import enviarMail from "../utils/MailSender.js";
class Service {
    model = new Model();
    
    addDonacion = (monto , nombre) => {
        try {
            if(monto > 10000 && nombre != "anonima"){
                enviarMail();
            }
        return this.model.addDonacion(monto , nombre);
        } catch (error) {
            throw error;
        }
    }
    
    getReporte = (monto) => {
        try {
           return this.model.getReporte(monto);
        } catch (error) {
            throw error;
        }
    };
  
}

export default Service;