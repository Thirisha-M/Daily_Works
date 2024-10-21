//union
//example
function str(q, r) {
    if (typeof q === 'number' || typeof r === 'number') {
        return q + r;
    }
    if (typeof q === 'string' || typeof r === 'string') {
        return q.concat(r);
    }
    throw new Error('Parameters must be numbers or strings');
}
console.log(str(50, 70));
console.log(str("vijay", "surya"));
