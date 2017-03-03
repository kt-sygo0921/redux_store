export const SEND = 'SEND';
export const ACT = 'ACT';
export const COUNTPLUS = 'COUNTPLUS';
export const COUNTMINUS = 'COUNTMINUS';

export function send(value) {
    return {
        type:SEND,
        value
    }
}

export function act(value) {
    return {
        type: ACT,
        value:value
    }
}

export function countplus(count) {
    return {
        type:COUNTPLUS,
        count: count
    }
}

export function countminus(count) {
    return {
        type:COUNTMINUS,
        count: count
    }
}
