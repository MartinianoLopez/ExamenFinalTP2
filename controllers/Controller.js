import Service from'../services/Service.js';

class Controller {
    service = new Service();
    addDonacion = async (req, res) => {
        try {
            let { monto, nombre } = req.body;

            if (!Number.isInteger(monto) || monto < 0) {
                return res.status(400).json({ success: false, message: 'Monto inválido. Debe ser un número entero positivo.' });
            }

            if (!nombre || nombre.trim() === "") {
                nombre = "Anónima";
            }
    
            const data = await this.service.addDonacion(monto, nombre);
            res.status(200).json({ success: true, message: data });
    
        } catch (error) {
            res.status(500).json({ success: false, message: `Error en el servidor: ${error.message}` });
        }
    };
    
    getReporte = async (req, res) => {
        try{
        let { monto } = req.params; 
        const data = await this.service.getReporte(monto);
        res.status(200).json({success: true, message: data});
        } catch (error) {
            res.status(500).json({ success: false, message: error.message });
        }
    };
}

export default Controller;
