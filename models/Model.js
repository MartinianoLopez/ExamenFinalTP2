class Model { 

    Donaciones = [
        { monto: 300, nombre: "Juan" },
        { monto: 500, nombre: "María" },
        { monto: 1000, nombre: "Carlos" },
        { monto: 150, nombre: "Ana" },
        { monto: 200, nombre: "Luis" },
        { monto: 750, nombre: "Sofía" },
        { monto: 1200, nombre: "Pedro" },
        { monto: 50, nombre: "Elena" },
        { monto: 400, nombre: "Miguel" },
        { monto: 900, nombre: "Laura" }
    ];


  addDonacion(monto, nombre) {
      this.Donaciones.push({ monto, nombre });
      return { monto, nombre };
  }

 getReporte(monto) {
    let report = [];
    for (let donacion of this.Donaciones) {
        if (donacion.monto >= monto ) {
            report.push(donacion);
        }
    }
    return report;
}
}
export default Model;