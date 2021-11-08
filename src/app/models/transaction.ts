export interface ReqRes {
  count: number;
  txs: Tx[];
}

export interface Tx {
  id: string;
  processDate: Date;
  ruleName: RuleName;
  process: string;
  lineNumber: number;
  isConsistent: boolean;
  idTx: string;
  fechaPago: Date;
  idCredito: null | string;
  fechaTransaccion: Date;
  nombreCanal: NombreCanal | null;
  idDocumento: number;
  tipoDocumento: number;
  valor: number;
  fechaVencimiento: Date;
  descripcion: null | string;
  producto: string;
  referenciaPago: null | string;
  secuencia: null | string;
  canal: string;
  documento: string;
  transaccion: number;
  causal: Causal | null;
  subcausal: null | string;
  autorizacion: null | string;
}

export enum Causal {
  R00 = 'R00',
  The01 = '01',
  The09 = '09',
}

export enum NombreCanal {
  Ath = 'ATH',
  Colpatria = 'COLPATRIA',
  Payu = 'PAYU',
}

export enum RuleName {
  ReglaCanalDocumentoValor = 'Regla Canal, Documento, Valor',
  ReglaCanalProductoValor = 'Regla Canal, Producto, Valor',
  ReglaDocumentoValor = 'Regla Documento, Valor',
}

export class Transaction {
  public id: string;
  public processDate: Date;
  public ruleName: null | string;
  public process: string;
  public lineNumber: number;
  public isConsistent: boolean;
  public idTx: string;
  public fechaPago: Date;
  public idCredito: null | string;
  public fechaTransaccion: Date;
  public nombreCanal: null | string;
  public idDocumento: number;
  public tipoDocumento: number;
  public valor: number;
  public fechaVencimiento: Date;
  public descripcion: null | string;
  public producto: string;
  public referenciaPago: null | string;
  public secuencia: null | string;
  public canal: string;
  public documento: string;
  public transaccion: number;
  public causal: null | string;
  public subcausal: null | string;
  public autorizacion: null | string;

  constructor(transac: Transaction) {
    Object.assign(this, transac);
  }
}
