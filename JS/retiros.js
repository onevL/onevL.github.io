class Retiro {

    constructor(monto, desc) {
        this._monto = monto;
        this._desc = desc;
    }

    get monto() {
        return this._monto;
    }

    set monto(monto) {
        this._monto = monto;
    }

    get desc() {
        return this._desc;
    }

    set desc(desc) {
        this._desc = desc;
    }

}