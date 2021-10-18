export interface Transaction {
  id: string;
  processDate: Date;
  ruleName: string;
  process: string;
  lineNumber: number;
  isConsistent: boolean;
  idTx: string;
  fechaPago: Date;
  idCredito: string;
  fechaTransaccion: Date;
  nombreCanal: string;
  idDocumento: number;
  tipoDocumento: number;
  valor: number;
  fechaVencimiento: Date;
  descripcion: string;
  producto: number;
  referenciaPago: string;
  secuencia: number;
  canal: number;
  documento: number;
  transaccion: number;
  causal: string;
  subcausal: string;
  autorizacion: string;
}

export class Transaction {
  id: string;
  processDate: Date;
  ruleName: string;
  process: string;
  lineNumber: number;
  isConsistent: boolean;
  idTx: string;
  fechaPago: Date;
  idCredito: string;
  fechaTransaccion: Date;
  nombreCanal: string;
  idDocumento: number;
  tipoDocumento: number;
  valor: number;
  fechaVencimiento: Date;
  descripcion: string;
  producto: number;
  referenciaPago: string;
  secuencia: number;
  canal: number;
  documento: number;
  transaccion: number;
  causal: string;
  subcausal: string;
  autorizacion: string;

  constructor(
    id: string,
    processDate: Date,
    ruleName: string,
    process: string,
    lineNumber: number,
    isConsistent: boolean,
    idTx: string,
    fechaPago: Date,
    idCredito: string,
    fechaTransaccion: Date,
    nombreCanal: string,
    idDocumento: number,
    tipoDocumento: number,
    valor: number,
    fechaVencimiento: Date,
    descripcion: string,
    producto: number,
    referenciaPago: string,
    secuencia: number,
    canal: number,
    documento: number,
    transaccion: number,
    causal: string,
    subcausal: string,
    autorizacion: string
  ) {
    this.id = id;
    this.processDate = processDate;
    this.ruleName = ruleName;
    this.process = process;
    this.lineNumber = lineNumber;
    this.isConsistent = isConsistent;
    this.idTx = idTx;
    this.fechaPago = fechaPago;
    this.idCredito = idCredito;
    this.fechaTransaccion = fechaTransaccion;
    this.nombreCanal = nombreCanal;
    this.idDocumento = idDocumento;
    this.tipoDocumento = tipoDocumento;
    this.valor = valor;
    this.fechaVencimiento = fechaVencimiento;
    this.descripcion = descripcion;
    this.producto = producto;
    this.referenciaPago = referenciaPago;
    this.secuencia = secuencia;
    this.canal = canal;
    this.documento = documento;
    this.transaccion = transaccion;
    this.causal = causal;
    this.subcausal = subcausal;
    this.autorizacion = autorizacion;
  }
}
