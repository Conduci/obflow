export interface Quote {
    p: number;
    q: number;
}

export enum ConnectionState {
    Connected = 0,
    Connecting = 1,
    Disconnected = 2,
}

export interface SymbolInfo {
    tickSize: number;
}

export interface OrderBookSnapshot {
    b: Quote[];
    a: Quote[];
}